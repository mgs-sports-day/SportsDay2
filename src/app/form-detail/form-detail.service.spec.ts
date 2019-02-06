import { TestBed } from '@angular/core/testing';

import { FormDetailService } from './form-detail.service';

describe('FormDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormDetailService = TestBed.get(FormDetailService);
    expect(service).toBeTruthy();
  });
});
