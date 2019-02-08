import { Component, OnInit } from '@angular/core';
import {Event, EventDetailService} from './event-detail.service';
import {ActivatedRoute} from '@angular/router';
import {Score} from '../form-detail/form-detail.service';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

    constructor(private eventDetailService: EventDetailService, private activatedRoute: ActivatedRoute) {
        this.loading = true;
        this.scoreBreakdown = { 7: {}, 8: {}, 9: {}, 10: {} };
    }

    event: Event;
    scoreBreakdown: { 7: {}, 8: {}, 9: {}, 10: {} };
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

                    console.log(this.scoreBreakdown);
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

}
