import { Component, OnInit } from '@angular/core';
import {EventDetailService, Event} from '../event-detail/event-detail.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Form, FormDetailService, Score} from '../form-detail/form-detail.service';
import {AdminService} from './admin.service';
import {MatSnackBar} from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    forms: Form[];
    events: Event[];
    scopeFormGroup: FormGroup;
    competitorFormGroup: FormGroup;
    authenticateFormGroup: FormGroup;

    loading: boolean;
    formsLoading: boolean;
    usingExistingData: boolean;

    pointAllocations: object;

    constructor(private eventDetailService: EventDetailService,
                private formDetailService: FormDetailService,
                private adminService: AdminService,
                private snackBar: MatSnackBar,
                private formBuilder: FormBuilder) {
        this.loading = true;

        this.pointAllocations = {
            A: [25, 23, 22, 21, 20, 19, 18, 17, 17],
            B: [16, 15, 14, 13, 12, 11, 10, 9, 9],
            C: [8, 7, 6, 5, 4, 3, 2, 1, 1]
        };
    }

    static numberToLetter(n) {
        const letters = ['A', 'B', 'C'];
        return letters[n];
    }

    ngOnInit() {
        this.eventDetailService.getEvents()
            .subscribe((events: [Event]) => {
                this.events = [...events];

                this.scopeFormGroup = this.formBuilder.group({
                    year: ['', Validators.required],
                    event: ['', Validators.required]
                });

                this.competitorFormGroup = this.formBuilder.group({
                    competitor: ['', Validators.required]
                });

                this.authenticateFormGroup = this.formBuilder.group({
                    token: [(localStorage.getItem('token') || ''), Validators.required]
                });

                this.loading = false;
            });
    }

    preventEvent($event) {
        $event.preventDefault();
    }

    saveToken($event) {
        this.preventEvent($event);
        localStorage.setItem('token', this.authenticateFormGroup.controls.token.value);
    }

    loadForms($event) {
        this.preventEvent($event);

        this.formsLoading = true;

        this.formDetailService.getYearGroupForms(this.scopeFormGroup.controls.year.value)
            .subscribe((forms: Form[]) => {

                this.forms = [...forms];

                this.eventDetailService.getEvent(this.scopeFormGroup.controls.event.value)
                    .subscribe((event: Event) => {

                        const thisEventScores: Score[] = event.scores.filter((e: Score) => {
                            return (
                                e.form.year === this.scopeFormGroup.controls.year.value &&
                                e.competitor === this.competitorFormGroup.controls.competitor.value
                            );
                        });

                        this.usingExistingData = thisEventScores.length !== 0;

                        if (thisEventScores.length !== 0) {
                            this.forms.forEach((form: Form) => {
                                const score: Score = thisEventScores.find(e => {
                                    return e.form.id === form.id;
                                });

                                form.position = score.rank || 8;
                                form.score_id = score.id;
                            });
                        } else {
                            this.forms.forEach((form: Form) => {
                                form.position = 8;
                            });
                        }

                        this.formsLoading = false;
                    });
            });
    }

    finish() {
        const scoresArray: Score[] = [];

        this.forms.forEach(form => {
            const newScore: Score = {
                event_id: this.scopeFormGroup.controls.event.value,
                form_id: form.id,
                points: this.getPointAllocation(this.competitorFormGroup.controls.competitor.value, form.position),
                competitor: this.competitorFormGroup.controls.competitor.value,
                id: null
            };

            if (this.usingExistingData) {
                newScore.id = form.score_id;
            }

            scoresArray.push(newScore);
        });

        this.adminService.saveScores(scoresArray, this.authenticateFormGroup.controls.token.value)
            .subscribe(() => {
                this.snackBar.open('Scores saved successfully!', 'Start again')
                    .afterDismissed().subscribe(() => {
                        window.location.reload();
                });
            }, (error: HttpErrorResponse) => {
                let errorMessage;

                if (error.status === 403) {
                    errorMessage = 'Unauthorised token.';
                } else {
                    errorMessage = 'An error occurred.';
                }

                this.snackBar.open(errorMessage, 'Dismiss');
            });
    }

    getCompetitorList(eventId) {
        const eventIndex = this.events.map(e => e.id).indexOf(eventId);
        const competitorArray = [];

        if (this.events[eventIndex]) {

            for (let i = 0; i < this.events[eventIndex].competitors; i++) {
                competitorArray.push(AdminComponent.numberToLetter(i));
            }

            return competitorArray;
        } else {
            return [];
        }
    }

    getPointAllocation(competitor, position) {
        return this.pointAllocations[competitor][position - 1];
    }

}
