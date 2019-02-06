import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Event {
    name: string;
    competitors: number;
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
        return this.http.get(this.rootUrl + '/event/' + id);
    }

    getEvents() {
        return this.http.get<[Event]>(this.rootUrl + '/events');
    }
}
