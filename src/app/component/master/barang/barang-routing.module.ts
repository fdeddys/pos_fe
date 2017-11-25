import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarangComponent } from './barang.component';
import { BarangDetilComponent  } from './barang-detil.component';

const routes: Routes = [
  { path: '', component: BarangComponent },  
  { path: ':id', component: BarangDetilComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarangRoutingModule { }
