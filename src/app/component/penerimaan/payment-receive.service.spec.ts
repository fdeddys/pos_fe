import { TestBed, inject } from '@angular/core/testing';

import { PaymentReceiveService } from './payment-receive.service';

describe('PaymentReceiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentReceiveService]
    });
  });

  it('should be created', inject([PaymentReceiveService], (service: PaymentReceiveService) => {
    expect(service).toBeTruthy();
  }));
});
