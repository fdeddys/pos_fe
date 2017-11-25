import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BarangComponent } from './barang.component';
import { BarangDetilComponent } from './barang-detil.component';
import { BarangRoutingModule } from './barang-routing.module';
import { BarangService } from './barang.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '../../../shared';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    CommonModule,
    BarangRoutingModule,
    NgbModule,
    FormsModule,
    PageHeaderModule,
    TypeaheadModule.forRoot(),
    AlertModule.forRoot(),    
  ],
  declarations: [BarangComponent, BarangDetilComponent],
  providers: [BarangService]
})
export class BarangModule { }



