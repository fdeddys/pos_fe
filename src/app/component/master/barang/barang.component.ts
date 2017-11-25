import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BarangService } from './barang.service';
import { Barang } from './barang.model';
import { ResponseWrapper, ITEMS_PER_PAGE } from '../../../shared';
import { routerTransition } from '../../../router.animations';
import { fadeInAnimation } from  '../../../fade-in.animation';

@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routerTransition(), fadeInAnimation]
})
export class BarangComponent implements OnInit {

  currentPage =1;
  totalElements:number=0;
  pageSize:number = ITEMS_PER_PAGE;
  moduleTitle:string ="Barang";
  isOpenFilter:boolean=false;
  barangs:Barang;
  
  
  constructor(private barangService:BarangService)  { }

  ngOnInit() {
    this.loadData(this.currentPage);
  }

  pageChange(newPage){
    console.log(" hal ==> " , this.currentPage,"-", newPage );
    this.loadData(newPage);
  }

  loadData(pageNum){
    this.barangService.getBarangs(pageNum,this.pageSize)
      .subscribe(
        (res : ResponseWrapper)=>{          
          console.log("Success ==>", res.json,res.headers ) ;
          this.totalElements=res.json.totalElements;
          this.barangs = res.json.content;
        },
        (res : ResponseWrapper)=> console.log("Error ==>", res)        
      )
  }



}
