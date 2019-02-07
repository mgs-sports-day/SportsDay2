import {Component, OnInit, ViewChild} from '@angular/core';
import {EventDetailService, Event} from '../event-detail/event-detail.service';
import {Form, FormDetailService} from '../form-detail/form-detail.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [EventDetailService]
})
export class HomeComponent implements OnInit {

    events: Event[];
    forms: Form[];

    constructor(private eventDetailService: EventDetailService, private formDetailService: FormDetailService) { }

    ngOnInit() {

        this.eventDetailService.getEvents()
            .subscribe((data: [Event]) => {
                this.events = [...data];
            });

        this.formDetailService.getForms()
            .subscribe((data: [Form]) => {

                this.forms = [...data];

                this.forms = this.forms.sort((a, b) => {
                    return b.total_points - a.total_points;
                });
            });
    }

}
