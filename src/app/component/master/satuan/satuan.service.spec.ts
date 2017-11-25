import { TestBed, inject } from '@angular/core/testing';

import { SatuanService } from './satuan.service';

describe('SatuanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SatuanService]
    });
  });

  it('should be created', inject([SatuanService], (service: SatuanService) => {
    expect(service).toBeTruthy();
  }));
});
