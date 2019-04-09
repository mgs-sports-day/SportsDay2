import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(private snackBar: MatSnackBar, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // @ts-ignore
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 404) {
                        this.router.navigateByUrl('/404');
                    } else {
                        const snackBarRef = this.snackBar.open('An API call failed, and the page couldn\'t be loaded. Try returning to the home page, or refreshing the page.', 'Refresh page');

                        snackBarRef.afterDismissed().subscribe(() => {
                            window.location.reload();
                        });
                    }

                    return throwError(error);
                })
            );
    }
}
