import { TestBed, inject } from '@angular/core/testing';

import { InvoiceExchangeService } from './invoice-exchange.service';

describe('InvoiceExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceExchangeService]
    });
  });

  it('should be created', inject([InvoiceExchangeService], (service: InvoiceExchangeService) => {
    expect(service).toBeTruthy();
  }));
});
