import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {Form, Score} from '../form-detail/form-detail.service';
import {Record, Event} from '../event-detail/event-detail.service';
import {HttpParamsOptions} from '@angular/common/http/src/params';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    rootUrl: string;

    constructor(private http: HttpClient) {
        this.rootUrl = localStorage.getItem('rootUrl');
    }

    saveScores(scores: Score[], token: string): Observable<Score[]> {

        const httpArray = [];

        scores.forEach(score => {
            httpArray.push(
                this.http.post(this.rootUrl + '/scores', {...score}, {
                    headers: new HttpHeaders({
                        Token: token
                    })
                })
            );
        });

        return forkJoin(httpArray);
    }

    getRecord(yearGroup: number, eventId: number): Observable<Record> {
        return this.http.get<Record>(this.rootUrl + '/events/' + eventId + '/year_group/' + yearGroup + '/record');
    }

    getCurrentRecord(yearGroup: number, eventId: number): Observable<Record> {
        return this.http.get<Record>(this.rootUrl + '/events/' + eventId + '/year_group/' + yearGroup + '/current_record');
    }

    updateRecord(form: Form, event: Event, competitor: string, token: string): Observable<Record> {
        if (form.record_holder === '' || form.record_holder == null || form.record_holder.length === 0) {
            form.record_holder = null;
        }

        return this.http.post<Record>(this.rootUrl + '/events/' + event.id + '/year_group/' + form.year + '/record', {
            record_holder: form.record_holder,
            record_value: form.score_number,
            record_competitor: competitor,
            form_id: form.id
        }, {
            headers: new HttpHeaders({
                Token: token
            })
        });
    }

    deleteRecord(yearGroup: number, event: Event, token: string) {
        return this.http.post(this.rootUrl + '/events/' + event.id + '/year_group/' + yearGroup + '/record',  {
            destroy_record: true
        }, {
            headers: new HttpHeaders({
                Token: token
            })
        });
    }
}
