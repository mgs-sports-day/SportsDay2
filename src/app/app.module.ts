import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterialImportsModule } from './material-imports/material-imports.module';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'events', component: EventDetailComponent },
    { path: 'forms/:id', component: FormDetailComponent },
    { path: 'events/:id', component: EventDetailComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EventDetailComponent,
        FormDetailComponent,
        AdminComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        MaterialImportsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    exports: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
