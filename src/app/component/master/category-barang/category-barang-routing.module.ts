import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryBarangComponent  } from './category-barang.component';
import { CategoryBarangDetilComponent  } from './category-barang-detil.component';

const routes: Routes = [
  { path: '', component: CategoryBarangComponent  },  
  { path: ':id', component: CategoryBarangDetilComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryBarangRoutingModule { }
