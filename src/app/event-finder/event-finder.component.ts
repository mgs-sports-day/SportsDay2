import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventDetailService, Event, Record} from '../event-detail/event-detail.service';
import {Allocation, EventFinderService} from './event-finder.service';
import {AdminService} from '../admin/admin.service';

@Component({
    selector: 'app-event-finder',
    templateUrl: './event-finder.component.html',
    styleUrls: ['./event-finder.component.css']
})
export class EventFinderComponent implements OnInit {

    @ViewChild('eventStepper') eventStepper;
    yearGroupFormGroup: FormGroup;
    competitorFormGroup: FormGroup;
    events: Event[];
    allocation: Allocation;
    recordToBeat: Record;

    constructor(private formBuilder: FormBuilder,
                private eventDetailService: EventDetailService,
                private eventFinderService: EventFinderService,
                private adminService: AdminService) {}

    static numberToLetter(n) {
        const letters = ['A', 'B', 'C'];
        return letters[n];
    }

    ngOnInit() {
        this.yearGroupFormGroup = this.formBuilder.group({
            yearGroup: ['', Validators.required],
            event: ['', Validators.required]
        });

        this.competitorFormGroup = this.formBuilder.group({
            competitor: ['', Validators.required]
        });

        this.eventDetailService.getEvents()
            .subscribe((events: Event[]) => {
                this.events = events;
            });
    }

    getCompetitorList(eventId) {
        const eventIndex = this.events.map(e => e.id).indexOf(eventId);
        const competitorArray = [];

        if (this.events[eventIndex]) {

            for (let i = 0; i < this.events[eventIndex].competitors; i++) {
                competitorArray.push(EventFinderComponent.numberToLetter(i));
            }

            return competitorArray;
        } else {
            return [];
        }
    }

    finish() {
        this.eventFinderService.getAllocation(this.yearGroupFormGroup.controls.yearGroup.value,
            this.yearGroupFormGroup.controls.event.value,
            this.competitorFormGroup.controls.competitor.value)
            .subscribe((allocation: Allocation) => {

                this.adminService.getRecord(this.yearGroupFormGroup.controls.yearGroup.value, this.yearGroupFormGroup.controls.event.value)
                    .subscribe((record: Record) => {
                        this.allocation = allocation;
                        this.recordToBeat = record;
                    });
            });
    }

    reset() {
        this.allocation = null;
        this.recordToBeat = null;
        this.yearGroupFormGroup.reset();
        this.competitorFormGroup.reset();

        this.eventStepper.reset();
    }

    getEvent() {
        return this.events[this.events.map(e => e.id).indexOf(this.yearGroupFormGroup.controls.event.value)];
    }

}
