import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { routerTransition } from '../../../router.animations';
import { ResponseWrapper } from '../../../shared';

import { Subscription, Observable } from 'rxjs/Rx';
import { AutofocusDirective } from '../../../autofocus.directive';
import { CategoryBarangService } from './category-barang.service';
import {  CategoryBarang } from './category-barang.model';

@Component({
  selector: 'app-category-barang-detil',
  templateUrl: './category-barang-detil.component.html',  
  animations: [routerTransition()],
  providers:[AutofocusDirective]
})

export class CategoryBarangDetilComponent implements OnInit {  

  public alerts: Array<IAlert> = [];
  numbAlert:number=0;

  private subscription : Subscription;
  categoryBarang : CategoryBarang;  
  constructor(
    private route :ActivatedRoute,
    private categoryBarangService : CategoryBarangService,    
  ) { 
    this.categoryBarang = new CategoryBarang(0, null);
    
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params)=>{
          if(params['id']) {
            this.loadById(params['id']);        
          }
        }
    )    
  }

  loadById(id){
    this.categoryBarangService.getById(id)
      .subscribe(
          (res:ResponseWrapper)=>{                
              this.categoryBarang = res.json;
              console.log("isi load",this.categoryBarang.id);
              if( res.json.id ==null  ){
                  console.log("create add new ");
                  this.addNew()                                 
              }
            },
          (err)=>{ console.log("Error (not found / error )==> Creating new Category()" ), 
                 this.addNew();
                  }
      )
  }

  addNew():void{
    this.categoryBarang = new CategoryBarang(0 , null);
    this.categoryBarang={
      'id':0,
      'keterangan':null
    };
    this.addAlert("Create new record..",'info')
  }

  save():void{
    console.log("req save ==>", this.categoryBarang," ==");
    this.categoryBarangService.save(this.categoryBarang)
      .subscribe(
        (res)=> { console.log("hasil save", res), this.categoryBarang = res, this.addAlert("save success",'danger') },
        (err)=> { console.log("Error save / update==>", err)}
      )
  }

  addAlert(pesan:string,tipe:string){
    this.numbAlert=+this.numbAlert;
    //"success", "info", "warning", "danger", "primary", "secondary", "light", "dark".
    this.alerts.push({
      id: this.numbAlert,
      type: tipe,
      message: pesan
    })
  }
  
  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

}


export interface IAlert {
  id: number;
  type: string;
  message: string;
}