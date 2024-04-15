import { TestBed } from '@angular/core/testing';

import { CeSessionsService } from './ce-sessions.service';

describe('CeSessionsService', () => {
  let service: CeSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
