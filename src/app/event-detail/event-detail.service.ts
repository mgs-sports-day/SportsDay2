import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Form, Score} from '../form-detail/form-detail.service';

export interface Record {
    score: number;
    units: string;
    holder: string;
    form?: Form;
    form_id?: number;
    event?: Event;
    event_id?: number;
    year: number;
    competitor: string;
    current_record: boolean;
    past_year_group: number;
}

export interface Event {
    id: number;
    name: string;
    competitors: number;
    scores: Score[];
    records?: Record[];
    form_record?: Record;
    past_record?: Record;
    score_units: string;
    world_record?: string;
    world_record_holder?: string;
}

@Injectable({
    providedIn: 'root',
})
export class EventDetailService {

    rootUrl: string;

    constructor(private http: HttpClient) {
        this.rootUrl = localStorage.getItem('rootUrl');
    }

    getEvent(id) {
        return this.http.get(this.rootUrl + '/events/' + id);
    }

    getEvents() {
        return this.http.get<[Event]>(this.rootUrl + '/events');
    }
}
