import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterialImportsModule } from './material-imports/material-imports.module';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RequestInterceptor} from './services/http_interceptor';
import {CookieService} from 'ngx-cookie-service';
import { EventFinderComponent } from './event-finder/event-finder.component';
import {MatAutocompleteModule} from '@angular/material';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'events', component: EventDetailComponent },
    { path: 'forms/:id', component: FormDetailComponent },
    { path: 'events/:id', component: EventDetailComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'about', component: AboutComponent },
    { path: 'find', component: EventFinderComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EventDetailComponent,
        FormDetailComponent,
        AdminComponent,
        AboutComponent,
        NotFoundComponent,
        EventFinderComponent
    ],
    imports: [
        BrowserModule,
        MaterialImportsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        ),
        MatAutocompleteModule
    ],
    exports: [
        AppComponent
    ],
    providers: [
        CookieService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
