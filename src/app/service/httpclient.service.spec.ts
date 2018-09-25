import { TestBed, inject } from '@angular/core/testing';

import { HttpclientService } from './httpclient.service';

describe('HttpclientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpclientService]
    });
  });

  it('should be created', inject([HttpclientService], (service: HttpclientService) => {
    expect(service).toBeTruthy();
  }));
});
