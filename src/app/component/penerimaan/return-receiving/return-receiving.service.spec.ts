import { TestBed, inject } from '@angular/core/testing';

import { ReturnReceivingService } from './return-receiving.service';

describe('ReturnReceivingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReturnReceivingService]
    });
  });

  it('should be created', inject([ReturnReceivingService], (service: ReturnReceivingService) => {
    expect(service).toBeTruthy();
  }));
});
