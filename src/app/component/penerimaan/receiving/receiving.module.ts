import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivingRoutingModule } from './receiving-routing.module';
import { ReceivingComponent } from './receiving.component';

@NgModule({
  imports: [
    CommonModule,
    ReceivingRoutingModule
  ],
  declarations: [ReceivingComponent]
})
export class ReceivingModule { }
