import { TestBed } from '@angular/core/testing';

import { WekipediaService } from './wekipedia.service';

describe('WekipediaService', () => {
  let service: WekipediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WekipediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
