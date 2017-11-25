import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoryBarangComponent  } from './category-barang.component';
import { CategoryBarangDetilComponent } from './category-barang-detil.component';
import { CategoryBarangRoutingModule } from './category-barang-routing.module';
import { CategoryBarangService  } from './category-barang.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  imports: [
    CommonModule,
    CategoryBarangRoutingModule,
    NgbModule,
    FormsModule,
    PageHeaderModule,    
  ],
  declarations: [CategoryBarangComponent, CategoryBarangDetilComponent],
  providers: [CategoryBarangService],
})
export class CategoryBarangModule { }
