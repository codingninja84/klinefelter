import { TestBed, inject } from '@angular/core/testing';

import { AutoQuoteService } from './autoquote.service';

describe('AutoQuoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutoQuoteService]
    });
  });

  it('should ...', inject([AutoQuoteService], (service: AutoQuoteService) => {
    expect(service).toBeTruthy();
  }));
});
