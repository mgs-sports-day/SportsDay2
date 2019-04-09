import { Component, OnInit } from '@angular/core';
import {Event, EventDetailService, Record} from './event-detail.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Score} from '../form-detail/form-detail.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

    constructor(private eventDetailService: EventDetailService,
                private activatedRoute: ActivatedRoute,
                private snackBar: MatSnackBar,
                private router: Router) {
        this.loading = true;
        this.scoreBreakdown = { 7: {}, 8: {}, 9: {}, 10: {} };
    }

    event: Event;
    events: Event[];
    scoreBreakdown: { 7: {}, 8: {}, 9: {}, 10: {} };
    records: object;
    loading: boolean;

    static numberToLetter(n) {
        const letters = ['A', 'B', 'C'];
        return letters[n];
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {

            this.eventDetailService.getEvent(params.get('id'))
                .subscribe((data: Event) => {
                    this.event = {...data};
                    this.loading = false;

                    for (let i = 0; i < this.event.competitors; i++) {
                        for (const key in this.scoreBreakdown) {

                            if (this.scoreBreakdown.hasOwnProperty(key)) {
                                this.scoreBreakdown[key][EventDetailComponent.numberToLetter(i)] = [];
                            }
                        }
                    }

                    this.event.scores.forEach((score: Score) => {
                        this.scoreBreakdown[score.form.year][score.competitor].push(score);
                    });

                    for (const yearKey in this.scoreBreakdown) {
                        if (this.scoreBreakdown.hasOwnProperty(yearKey)) {
                            for (const eventKey in this.scoreBreakdown[yearKey]) {
                                if (this.scoreBreakdown[yearKey].hasOwnProperty(eventKey)) {

                                    this.scoreBreakdown[yearKey][eventKey].sort((a, b) => {
                                        return b.score - a.score;
                                    });

                                    this.scoreBreakdown[yearKey][eventKey].forEach((score: Score) => {
                                        score.rank = this.scoreBreakdown[yearKey][eventKey].indexOf(score) + 1;
                                    });

                                }
                            }
                        }
                    }

                    this.records = {
                        7: {
                            2018: {}, 2019: {}
                        },
                        8: {
                            2018: {}, 2019: {}
                        },
                        9: {
                            2018: {}, 2019: {}
                        },
                        10: {
                            2018: {}, 2019: {}
                        },
                    };

                    this.event.records.forEach((record: Record) => {
                        if (record.current_record) {
                            this.records[record.form.year]['2019'] = record;
                        } else {
                            this.records[record.past_year_group]['2018'] = record;
                        }
                    });

                    console.log(this.scoreBreakdown);
                    console.log(this.records);

                    this.eventDetailService.getEvents()
                        .subscribe((events: Event[]) => {
                            events.splice(events
                                .map(e => e.id)
                                .indexOf(
                                    parseInt(params.get('id'), 10)
                                ), 1);

                            this.events = events;
                        });
                });
        });
    }

    subEventArray(n) {
        const array = [];
        const letters = ['A', 'B', 'C'];

        for (let i = 0; i < n; i ++) {
            array.push(letters[i]);
        }

        return array;
    }

    isEmptyObject(object: object) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

}
