import { TestBed, inject } from '@angular/core/testing';

import { HttpInterceptorBasicAuthService } from './http-interceptor-basic-auth.service';

describe('HttpInterceptorBasicAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpInterceptorBasicAuthService]
    });
  });

  it('should be created', inject([HttpInterceptorBasicAuthService], (service: HttpInterceptorBasicAuthService) => {
    expect(service).toBeTruthy();
  }));
});
