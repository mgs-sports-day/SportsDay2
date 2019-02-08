import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {Score} from '../form-detail/form-detail.service';

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
}
