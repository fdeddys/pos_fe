import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import { PurchaseOrderComponent } from './purchase-order.component';

@NgModule({
  imports: [
    CommonModule,
    PurchaseOrderRoutingModule
  ],
  declarations: [PurchaseOrderComponent]
})
export class PurchaseOrderModule { }
