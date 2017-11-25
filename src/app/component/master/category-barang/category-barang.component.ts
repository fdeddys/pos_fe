import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ResponseWrapper, ITEMS_PER_PAGE } from '../../../shared';
import { routerTransition } from '../../../router.animations';
import { fadeInAnimation } from  '../../../fade-in.animation';

import { CategoryBarangService } from './category-barang.service';
import { CategoryBarang } from './category-barang.model';

@Component({
  selector: 'app-category-barang',
  templateUrl: './category-barang.component.html',
  styleUrls: ['./category-barang.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routerTransition(), fadeInAnimation]
})
export class CategoryBarangComponent implements OnInit {

  currentPage =1;
  totalElements:number=0;
  pageSize:number = ITEMS_PER_PAGE;
  moduleTitle:string ="Barang";
  isOpenFilter:boolean=false;
  categoryBarangs:CategoryBarang;

  constructor(private categoryBarangService:CategoryBarangService) { }

  ngOnInit() {
    this.loadData(this.currentPage);
  }
  

  pageChange(newPage){
    console.log(" hal ==> " , this.currentPage,"-", newPage );
    this.loadData(newPage);
  }

  loadData(pageNum){
    this.categoryBarangService.getAll(pageNum,this.pageSize)
      .subscribe(
        (res : ResponseWrapper)=>{          
          console.log("Success ==>", res.json,res.headers ) ;
          this.totalElements=res.json.totalElements;
          this.categoryBarangs = res.json.content;
        },
        (res : ResponseWrapper)=> console.log("Error ==>", res)        
      )
  }



}
