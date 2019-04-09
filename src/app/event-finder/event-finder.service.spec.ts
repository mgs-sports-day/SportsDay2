import { TestBed } from '@angular/core/testing';

import { EventFinderService } from './event-finder.service';

describe('EventFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventFinderService = TestBed.get(EventFinderService);
    expect(service).toBeTruthy();
  });
});
