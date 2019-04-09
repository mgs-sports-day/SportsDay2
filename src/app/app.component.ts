import {Component, HostListener, isDevMode, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    mobile: boolean;
    sidenavOpened: boolean;
    navigation: object;
    defaultReloadTime: number;
    reloadTime: number;
    reloadEnabled: boolean;

    constructor(private snackBar: MatSnackBar, private cookieService: CookieService, private router: Router) {
        this.reloadEnabled = false;
    }

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
            },
            {
                name: 'Event Finder',
                path: '/find'
            },
            {
                name: 'About',
                path: '/about'
            }
        ];

        if (isDevMode()) {
            localStorage.setItem('rootUrl', 'http://localhost:3000');
        } else {
            localStorage.setItem('rootUrl', 'https://sportsday2api.herokuapp.com');
        }

        if (!this.cookieService.check('cookie-dismissed')) {
            const snackBarRef = this.snackBar.open('This website uses cookies for anonymous statistical purposes. By continuing to use this website, it is assumed that you agree to this.', 'Accept');

            snackBarRef.afterDismissed().subscribe(() => {
                this.cookieService.set('cookie-dismissed', 'true', 300);
            });
        }

        this.defaultReloadTime = 120;
        this.reloadTime = this.defaultReloadTime;
        this.router.events.subscribe(() => {
            this.reloadEnabled = !(
                this.router.url.includes('about')
                || this.router.url.includes('find')
                || this.router.url.includes('admin')
            );
            this.reloadTime = this.defaultReloadTime;
        });

        window.setInterval(() => {
            if (this.reloadEnabled) {
                this.reloadTime--;

                if (this.reloadTime === 0) {
                    const oldStrategy = this.router.routeReuseStrategy.shouldReuseRoute;
                    this.router.routeReuseStrategy.shouldReuseRoute = () => {
                        return false;
                    };

                    this.router.navigated = false;
                    this.router.navigate([this.router.url])
                        .then(() => {
                            this.reloadTime = this.defaultReloadTime;
                            this.router.routeReuseStrategy.shouldReuseRoute = oldStrategy;
                        });
                }
            }
        }, 1000);
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.updateNavigation();
    }
}
