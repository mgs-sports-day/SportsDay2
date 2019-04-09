import { Component, OnInit } from '@angular/core';
import {EventDetailService, Event, Record} from '../event-detail/event-detail.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Form, FormDetailService, Score} from '../form-detail/form-detail.service';
import {AdminService} from './admin.service';
import {MatSnackBar} from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http';
import * as moment from 'moment';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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

    forms: Form[];
    events: Event[];
    selectedEvent: Event;
    scopeFormGroup: FormGroup;
    competitorFormGroup: FormGroup;
    authenticateFormGroup: FormGroup;

    loading: boolean;
    formsLoading: boolean;
    usingExistingData: boolean;

    pointAllocations: object;

    recordBeaten: boolean;
    recordHasNoHolder: boolean;
    currentRecord: Record;
    existingRecord: Record;
    oldRecord: Record;

    time: string;

    static numberToLetter(n) {
        const letters = ['A', 'B', 'C'];
        return letters[n];
    }

    static isEmptyObject(object: object) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    testRecordBeaten(currentScore, oldScore) {
        if ([1, 2, 3, 4].includes(this.selectedEvent.id)) {
            return currentScore > oldScore;
        } else if ([5, 6, 7, 8, 9, 10, 11].includes(this.selectedEvent.id)) {
            return currentScore < oldScore;
        }
    }

    ngOnInit() {
        this.time = moment().format('LTS');
        window.setInterval(() => {
            this.time = moment().format('LTS');
        }, 1000);

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

                        this.selectedEvent = event;

                        this.getRecord(() => {
                            if (this.currentRecord) {
                                if (this.competitorFormGroup.controls.competitor.value === this.currentRecord.competitor) {
                                    const recordForm = this.forms.find((e: Form) => {
                                        return e.id === this.currentRecord.form.id;
                                    });

                                    this.forms[this.forms.indexOf(recordForm)].record_holder = this.currentRecord.holder;
                                    this.forms[this.forms.indexOf(recordForm)].score_number = this.currentRecord.score;
                                    this.forms[this.forms.indexOf(recordForm)].beats_record = true;
                                    this.recordBeaten = true;
                                    this.existingRecord = this.currentRecord;
                                }
                            } else {
                                this.forms.forEach((form: Form) => {
                                    form.score_number = 0;
                                    form.record_holder = '';
                                });
                            }

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
            });
    }

    testRecord(form: Form) {
        if (this.recordsAllowed()) {
            this.adminService.getRecord(this.scopeFormGroup.controls.year.value, this.selectedEvent.id)
                .subscribe((record: Record) => {
                    if (record) {
                        if ((record.units === 'metre' && form.score_number > record.score) ||
                            (record.units === 'second' && form.score_number < record.score)) {
                            form.equals_record = false;
                            form.beats_record = true;
                            this.recordBeaten = true;
                        } else if (form.score_number === record.score) {
                            form.equals_record = true;
                            form.beats_record = false;
                            this.recordBeaten = false;
                        } else {
                            form.equals_record = false;
                            form.beats_record = false;
                            this.recordBeaten = false;
                        }

                        this.oldRecord = record;
                    } else {
                        form.equals_record = false;
                        form.beats_record = true;
                        this.recordBeaten = true;
                    }

                    this.recordHasNoHolder = [10, 11].includes(this.selectedEvent.id);
                });
        }
    }

    getRecord(callback: () => void) {
        this.adminService.getCurrentRecord(this.scopeFormGroup.controls.year.value, this.selectedEvent.id)
            .subscribe((record: Record) => {
                if (record) {
                    this.currentRecord = record;
                }

                callback();
            });
    }

    updatePosition(element: Form) {
        element.equals_record = false;
        element.beats_record = false;
        this.recordBeaten = false;
        element.score_number = 0;
    }

    finish() {
        const scoresArray: Score[] = [];

        this.forms.forEach(form => {
            const newScore: Score = {
                event_id: this.scopeFormGroup.controls.event.value,
                form_id: form.id,
                points: this.getPointAllocation(this.competitorFormGroup.controls.competitor.value, form),
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
                const completeCycle = () => {
                    this.snackBar.open('Scores saved successfully!', 'Start again')
                        .afterDismissed().subscribe(() => {
                            window.location.reload();
                    });
                };

                const scoreForm = this.forms.find((e: Form) => {
                    return e.score_number > 0;
                });

                if (scoreForm) {
                    if (this.testRecordBeaten(scoreForm.score_number, this.oldRecord.score)) {
                        console.log('sending create record request');
                        this.adminService.updateRecord(
                            scoreForm,
                            this.selectedEvent,
                            this.competitorFormGroup.controls.competitor.value,
                            this.authenticateFormGroup.controls.token.value)
                            .subscribe(() => {
                                completeCycle();
                            });

                    } else if (!this.testRecordBeaten(scoreForm.score_number, this.oldRecord.score)) {
                        console.log('sending delete record request');
                        this.adminService.deleteRecord(
                            scoreForm.year,
                            this.selectedEvent,
                            this.authenticateFormGroup.controls.token.value
                        )
                            .subscribe(() => {
                                completeCycle();
                            });
                    } else {
                        completeCycle();
                    }
                } else {
                    completeCycle();
                }

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

    getPointAllocation(competitor, element) {
        let addition = 0;

        if (element.beats_record) {
            addition = 2;
        } else if (element.equals_record) {
            addition = 1;
        }

        return this.pointAllocations[competitor][element.position - 1] + addition;
    }

    getSelectedEventName() {
        if (!this.selectedEvent) {
            return '';
        } else {
            return this.selectedEvent.name;
        }
    }

    recordsAllowed() {
        return this.competitorFormGroup.controls.competitor.value === 'A';
    }

}
