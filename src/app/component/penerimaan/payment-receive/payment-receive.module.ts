import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentReceiveRoutingModule } from './payment-receive-routing.module';
import { PaymentReceiveComponent } from './payment-receive.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentReceiveRoutingModule
  ],
  declarations: [PaymentReceiveComponent]
})
export class PaymentReceiveModule { }
