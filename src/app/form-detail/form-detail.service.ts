import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Form {
    name: string;
    year: number;
    scores: Score[];
    total_points: number;
    rank: number;
    year_rank: number;
}

export interface Score {
    form_id: number;
    event_id: number;
    score: number;
    competitor: string;
    event: Event;
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
}
