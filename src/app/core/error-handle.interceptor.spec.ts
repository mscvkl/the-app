import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ErrorHandleInterceptor } from './error-handle.interceptor';

describe('ErrorHandleInterceptor', () => {
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        ErrorHandleInterceptor,
        { provide: Router, useValue: routerSpy }
      ]
    });

  });

  it('should be created', () => {
    const interceptor: ErrorHandleInterceptor = TestBed.inject(ErrorHandleInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
