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
    loading: boolean;

    constructor(private eventDetailService: EventDetailService, private formDetailService: FormDetailService) {
        this.loading = true;
    }

    ngOnInit() {

        this.eventDetailService.getEvents()
            .subscribe((events: [Event]) => {
                this.events = [...events];

                this.formDetailService.getForms()
                    .subscribe((forms: [Form]) => {

                        this.forms = [...forms];

                        this.forms = this.forms.sort((a, b) => {
                            return a.rank - b.rank;
                        });

                        this.loading = false;
                    });
            });
    }

}
