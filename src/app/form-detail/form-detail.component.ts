import { Component, OnInit } from '@angular/core';
import { Form, FormDetailService, Score } from './form-detail.service';
import { ActivatedRoute } from '@angular/router';
import { EventDetailService } from '../event-detail/event-detail.service';
import { Event } from '../event-detail/event-detail.service';

@Component({
    selector: 'app-form-detail',
    templateUrl: './form-detail.component.html',
    styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {

    form: Form;
    events: Event[];
    statistics: {}[];
    eventsBreakdown: {A: {score, rank}, B: {score, rank}, C: {score, rank}, name: string, id, total: 0}[];
    loading: boolean;

    constructor(private formDetailService: FormDetailService,
                private eventDetailService: EventDetailService,
                private activatedRoute: ActivatedRoute) {
        this.loading = true;
        this.eventsBreakdown = [];
    }

    ngOnInit() {

        this.activatedRoute.paramMap.subscribe(params => {

            this.formDetailService.getForm(params.get('id'))
                .subscribe((form: Form) => {
                    this.form = {...form};

                    this.statistics = [
                        { name: 'Total points', value: this.form.total_points },
                        { name: 'School position', value: this.form.rank },
                        { name: 'Year position', value: this.form.year_rank }
                    ];

                    console.log(this.form);

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

                            console.log(this.eventsBreakdown);
                            this.loading = false;

                        });
                });
        });
    }

}
