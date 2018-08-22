import { TestBed, inject } from '@angular/core/testing';

import { ProjectHelperService } from './project-helper.service';

describe('ProjectHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectHelperService]
    });
  });

  it('should be created', inject([ProjectHelperService], (service: ProjectHelperService) => {
    expect(service).toBeTruthy();
  }));
});
