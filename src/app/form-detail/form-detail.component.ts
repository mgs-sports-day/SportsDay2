import { Component, OnInit } from '@angular/core';
import {Form, FormDetailService} from './form-detail.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-form-detail',
    templateUrl: './form-detail.component.html',
    styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {

    form: Form;
    statistics: {}[];

    constructor(private formDetailService: FormDetailService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

        this.activatedRoute.paramMap.subscribe(params => {

            this.formDetailService.getForm(params.get('id'))
                .subscribe((data: Form) => {
                    this.form = {...data};

                    this.statistics = [
                        { name: 'Total points', value: this.form.total_points },
                        { name: 'School position', value: this.form.rank },
                        { name: 'Year position', value: this.form.year_rank }
                    ];

                    console.log(this.form);
                });
        });
    }

}
