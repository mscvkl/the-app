import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { appRoutingPaths } from '../app-routing.module';

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError(
          (error: HttpErrorResponse)=>{
            this.router.navigate([appRoutingPaths.error]);

            return throwError(new Error(error.message));
          }
        )
      );
  }
}
