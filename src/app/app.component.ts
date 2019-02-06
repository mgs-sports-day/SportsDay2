import {Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    mobile: boolean;
    sidenavOpened: boolean;
    navigation: object;

    updateNavigation() {
        this.mobile = window.innerWidth <= 768;
    }

    ngOnInit() {
        this.updateNavigation();
        this.sidenavOpened = false;

        this.navigation = [
            {
                name: 'Home',
                path: '/'
            }
        ];

        localStorage.setItem('rootUrl', 'http://localhost:3000');
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.updateNavigation();
    }
}
