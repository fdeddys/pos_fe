import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceExchangeRoutingModule } from './invoice-exchange-routing.module';
import { InvoiceExchangeComponent } from './invoice-exchange.component';

@NgModule({
  imports: [
    CommonModule,
    InvoiceExchangeRoutingModule
  ],
  declarations: [InvoiceExchangeComponent]
})
export class InvoiceExchangeModule { }
