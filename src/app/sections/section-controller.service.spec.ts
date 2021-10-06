import { TestBed } from '@angular/core/testing';

import { SectionControllerService } from './section-controller.service';

describe('SectionControllerService', () => {
  let service: SectionControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
