import { TestBed } from '@angular/core/testing';

import { GetSnapService } from './get-snap.service';

describe('GetSnapService', () => {
  let service: GetSnapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSnapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
