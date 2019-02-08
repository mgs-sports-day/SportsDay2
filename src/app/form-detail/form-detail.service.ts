import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Event } from '../event-detail/event-detail.service';

export interface Form {
    id?: number;
    name: string;
    year: number;
    scores?: Score[];
    total_points?: number;
    rank?: number;
    year_rank?: number;

    // pseudo-attributes
    position?: number;
    score_id?: number;
}

export interface Score {
    id?: number;

    form_id: number;
    event_id: number;

    // alternative names
    score?: number;
    points?: number;

    competitor: string;
    event?: Event;
    form?: Form;
    rank?: number;
}

@Injectable({
    providedIn: 'root'
})
export class FormDetailService {

    rootUrl: string;

    constructor(private http: HttpClient) {
        this.rootUrl = localStorage.getItem('rootUrl');
    }

    getForm(id) {
        return this.http.get<Form>(this.rootUrl + '/forms/' + id);
    }

    getForms() {
        return this.http.get<[Form]>(this.rootUrl + '/forms');
    }

    getYearGroupForms(year) {
        return this.http.get<[Form]>(this.rootUrl + '/year/' + year + '/forms');
    }
}
