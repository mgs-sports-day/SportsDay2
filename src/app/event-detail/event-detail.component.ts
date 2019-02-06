import { Component, OnInit } from '@angular/core';
import {Event, EventDetailService} from './event-detail.service';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

    events: Event[];

    constructor(private eventDetailService: EventDetailService) { }

    ngOnInit() {
        this.eventDetailService.getEvents()
            .subscribe((data: [Event]) => {
                this.events = [...data];
            });
    }

}
