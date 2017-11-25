import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceExchangeComponent } from './invoice-exchange.component';

describe('InvoiceExchangeComponent', () => {
  let component: InvoiceExchangeComponent;
  let fixture: ComponentFixture<InvoiceExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
