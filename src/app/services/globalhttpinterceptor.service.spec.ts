import { TestBed } from '@angular/core/testing';

import { GlobalhttpinterceptorService } from './globalhttpinterceptor.service';

describe('GlobalhttpinterceptorService', () => {
  let service: GlobalhttpinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalhttpinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
