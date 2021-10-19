import { TestBed } from '@angular/core/testing';

import {GlobalHttpInterceptorService} from './globalhttpinterceptor.service';

describe('GlobalhttpinterceptorService', () => {
  let service: GlobalHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
