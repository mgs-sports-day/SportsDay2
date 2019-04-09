import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from '../event-detail/event-detail.service';

export interface Allocation {
    starts_at: object;
    event_id: number;
    event: Event;
    competitor: string;
    year_group: string;
    location: string;
}

@Injectable({
    providedIn: 'root'
})
export class EventFinderService {

    rootUrl: string;

    constructor(private http: HttpClient) {
        this.rootUrl = localStorage.getItem('rootUrl');
    }

    getAllocation(yearGroup, eventId, competitor) {
        return this.http.get<Allocation>(this.rootUrl + '/events/' + eventId + '/year_group/' + yearGroup + '/competitor/' + competitor);
    }
}
