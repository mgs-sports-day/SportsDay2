import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Form {
    name: string;
    year: number;
    scores: Score[];
    totalPoints: number;
}

export interface Score {
    form_id: number;
    event_id: number;
    score: number;
    competitor: string;
}

@Injectable({
    providedIn: 'root'
})
export class FormDetailService {

    rootUrl: string;

    constructor(private http: HttpClient) {
        this.rootUrl = localStorage.getItem('rootUrl');
    }

    getForms() {
        return this.http.get<[Form]>(this.rootUrl + '/forms');
    }
}
