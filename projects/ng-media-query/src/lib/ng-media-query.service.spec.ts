import { TestBed } from '@angular/core/testing';

import { NgMediaQueryService } from './ng-media-query.service';

describe('NgMediaQueryService', () => {
  let service: NgMediaQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMediaQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
