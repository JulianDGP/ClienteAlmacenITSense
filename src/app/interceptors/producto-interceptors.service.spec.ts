import { TestBed } from '@angular/core/testing';

import { ProductoInterceptorsService } from './producto-interceptors.service';

describe('ProductoInterceptorsService', () => {
  let service: ProductoInterceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoInterceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
