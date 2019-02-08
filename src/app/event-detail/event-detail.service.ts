import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Score} from '../form-detail/form-detail.service';

export interface Event {
    id: number;
    name: string;
    competitors: number;
    scores: Score[];
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
