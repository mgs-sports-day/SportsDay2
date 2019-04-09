import { Component, OnInit } from '@angular/core';
import { Form, FormDetailService, Score } from './form-detail.service';
import { ActivatedRoute } from '@angular/router';
import { EventDetailService } from '../event-detail/event-detail.service';
import { Event, Record } from '../event-detail/event-detail.service';
import {AdminService} from '../admin/admin.service';

@Component({
    selector: 'app-form-detail',
    templateUrl: './form-detail.component.html',
    styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {

    constructor(private formDetailService: FormDetailService,
                private eventDetailService: EventDetailService,
                private activatedRoute: ActivatedRoute) {
    }

    form: Form;
    forms: Form[];
    events: Event[];
    statistics: {}[];
    eventsBreakdown: {A: {score, rank}, B: {score, rank}, C: {score, rank}, name: string, id, total: 0}[];
    recordsBreakdown: object[];
    loading: boolean;

    ngOnInit() {

        this.activatedRoute.paramMap.subscribe(params => {

            this.loading = true;
            this.eventsBreakdown = [];

            this.formDetailService.getForm(params.get('id'))
                .subscribe((form: Form) => {
                    this.form = {...form};
                    console.log(this.form);

                    this.statistics = [
                        { name: 'Total points', value: this.form.total_points },
                        { name: 'Records broken', value: this.form.records.length },
                        { name: 'School position', value: this.form.rank },
                        { name: 'Year position', value: this.form.year_rank }
                    ];

                    this.eventDetailService.getEvents()
                        .subscribe((events: [Event]) => {
                            this.events = [...events];

                            this.events.forEach((event: Event) => {
                                this.eventsBreakdown.push({
                                    A: {score: 0, rank: 0},
                                    B: {score: 0, rank: 0},
                                    C: {score: 0, rank: 0},
                                    name: event.name,
                                    id: event.id,
                                    total: 0
                                });
                            });

                            this.form.scores.forEach((score: Score) => {
                                const index = this.eventsBreakdown
                                    .map(e => e.name)
                                    .indexOf(score.event.name);

                                this.eventsBreakdown[index][score.competitor] = {...score};
                            });

                            this.eventsBreakdown.forEach(event => {
                                event.total = event.A.score + event.B.score + event.C.score;
                            });

                            this.recordsBreakdown = [];

                            if (this.form.records.length > 0) {
                                events.forEach((event: Event) => {
                                    this.form.records.forEach((record: Record) => {
                                        if (record.event_id === event.id) {
                                            event.form_record = record;
                                        }
                                    });

                                    event.records.forEach((record: Record) => {
                                        if (record.past_year_group === this.form.year && record.current_record === false) {
                                            event.past_record = record;
                                        }
                                    });

                                    this.recordsBreakdown.push(event);
                                });
                            }

                            console.log(this.recordsBreakdown);

                            this.loading = false;

                        });
                });

            this.formDetailService.getForms()
                .subscribe((forms: Form[]) => {
                    this.forms = forms.sort((a: Form, b: Form) => {
                        return a.rank - b.rank;
                    });

                    this.forms.forEach((e: Form) => {
                        e.total_points = e.scores
                            .map(score => score.score)
                            .reduce((total, num) => {
                            return total + num;
                        }, 0);
                    });

                    this.forms.splice(this.forms
                        .map(e => e.id)
                        .indexOf(
                            parseInt(params.get('id'), 10)
                        ), 1);
                });
        });
    }

    nth(d) {
        if (d > 3 && d < 21) {
            return 'th';
        }

        switch (d % 10) {
            case 1:  return 'st';
            case 2:  return 'nd';
            case 3:  return 'rd';
            default: return 'th';
        }
    }

    safeAccessObject(object, property, fallback, append?) {
        if (object) {
            return `${object[property]}${append || ''}`;
        } else {
            return fallback;
        }
    }

    safeCompareObject(object) {
        if (object.form_record && object.past_record) {
            if (object.form_record.score > object.past_record.score) {
                return true;
            }
        } else {
            return false;
        }
    }

}
