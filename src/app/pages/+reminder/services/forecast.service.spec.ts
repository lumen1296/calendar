import { TestBed } from '@angular/core/testing';

import { ForeCastService } from './forecast.service';

describe('ForeCastService', () => {
  let service: ForeCastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForeCastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
