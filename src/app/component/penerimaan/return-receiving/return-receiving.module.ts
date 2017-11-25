import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnReceivingRoutingModule } from './return-receiving-routing.module';
import { ReturnReceivingComponent } from './return-receiving.component';

@NgModule({
  imports: [
    CommonModule,
    ReturnReceivingRoutingModule
  ],
  declarations: [ReturnReceivingComponent]
})
export class ReturnReceivingModule { }
