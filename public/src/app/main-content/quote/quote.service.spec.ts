import { TestBed, inject } from '@angular/core/testing';

import { QuoteService } from './quote.service';

describe('QouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteService]
    });
  });

  it('should ...', inject([QuoteService], (service: QuoteService) => {
    expect(service).toBeTruthy();
  }));
});
