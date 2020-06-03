import { TestBed } from '@angular/core/testing';

import { FbApiService } from './fb-api.service';

describe('FbApiService', () => {
  let service: FbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
