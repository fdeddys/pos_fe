import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { routerTransition } from '../../../router.animations';


import { Subscription, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import { Response } from '@angular/http';

import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

import { AutofocusDirective } from '../../../autofocus.directive';
import { BarangService, Barang } from './';

import { CategoryBarang } from '../category-barang/category-barang.model';
import { CategoryBarangService } from '../category-barang/category-barang.service';
import { ResponseWrapper } from '../../../shared';

@Component({
  selector: 'app-barang-detil',
  templateUrl: './barang-detil.component.html',
  styleUrls: ['./barang.component.scss'],  
  animations: [routerTransition()],
  providers:[AutofocusDirective]
})
export class BarangDetilComponent implements OnInit {  

  public alerts: Array<IAlert> = [];
  numbAlert:number=0;
  public groupSelected: any;

  public hasil:any;
  public hasil2:any;
  private subscription : Subscription;
  private barang : Barang;  

  dataSource: Observable<any>;
  asyncSelected: string;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;

  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(
    private route :ActivatedRoute,
    private barangService :BarangService,    
    private categoryBarangService : CategoryBarangService,
  ) {

    // this.dataSource = Observable.create((observer: any) => {
    //   // Runs on every search
    //   observer.next(this.asyncSelected);
    // }).mergeMap((token: string) => this.getStatesAsObservable(token));

    this.dataSource = Observable.create((observer:any) => {
        this.categoryBarangService.getAll(1,10)
          .subscribe((result : any ) => {
              observer.next(result.json.content);
          });
    });




   }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params)=>{
          if(params['id']) this.loadById(params['id']);        
        }
    )    
  }

  // getStatesAsObservable(token: string): Observable<any> {
  //   let query = new RegExp(token, 'ig');

  //   return Observable.of(
  //     // this.statesComplex.filter((state: any) => {
  //     //     console.log("token ",token);          

  //         this.categoryBarangService.getForTypeahead(1,10)
  //             .then(result =>
  //                 { 
  //                   console.log("Success ==>", result.content );
  //                   return result.content.keterangan;
  //                   //return query.test(state.name);
  //                 }        
  //             )        

            
  //         // })
          
  //     );

  // }
  
  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }
 
  changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }
 
  typeaheadOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.value);
  }


  loadById(id:number){
    this.barangService.getBarang(id)
      .subscribe(
        (res)=>{ this.barang = res},
        (err)=>{ console.log("Error (not found / error )==> Creating new Barang()" ), 
                 this.addNew();
               }
      )
  }

  addNew():void{
    this.barang = new Barang(0 , null);
    this.barang={
      'id':0,
      'nama':null
    };
    this.addAlert("Create new record..",'info');
    
  }

  save():void{
    console.log("req save ==>", this.barang," ==");
    this.barangService.save(this.barang)
      .subscribe(
        (res)=> { console.log("hasil save", res), this.barang = res, this.addAlert("save success",'danger') },
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

  searchGroup = (text$ : Observable<string>) =>  {
    text$
    .debounceTime(200)
    .distinctUntilChanged()
    .do((text) => console.log(text))
    .switchMap(term =>
      this.categoryBarangService.getForTypeahead(1,10)
      //.getCarriers(term)
    )

  }

  formatter = (x: {name: string}) => x.name;

  cari(){
    //console.log("cariiii")
    // return statesWithFlags

    return  this.categoryBarangService.getAll(1,10)
      .subscribe(
        (res) => {
               return statesWithFlags
                 //this.hasil = res.json.content
        }
      )
  }

  selected: string;
  statesComplex: any[] = [
    { id: 1, name: 'Alabama', region: 'South' },
    { id: 2, name: 'Alaska', region: 'West' },
    {
      id: 3,
      name: 'Arizona',
      region: 'West'
    },
    { id: 4, name: 'Arkansas', region: 'South' },
    { id: 5, name: 'California', region: 'West' },
    { id: 6, name: 'Colorado', region: 'West' },
    { id: 7, name: 'Connecticut', region: 'Northeast' },
    { id: 8, name: 'Delaware', region: 'South' },
    { id: 9, name: 'Florida', region: 'South' },
    { id: 10, name: 'Georgia', region: 'South' },
    { id: 11, name: 'Hawaii', region: 'West' },
    { id: 12, name: 'Idaho', region: 'West' },
    { id: 13, name: 'Illinois', region: 'Midwest' },
    { id: 14, name: 'Indiana', region: 'Midwest' },
    { id: 15, name: 'Iowa', region: 'Midwest' },
    { id: 16, name: 'Kansas', region: 'Midwest' },
    { id: 17, name: 'Kentucky', region: 'South' },
    { id: 18, name: 'Louisiana', region: 'South' },
    { id: 19, name: 'Maine', region: 'Northeast' },
    { id: 21, name: 'Maryland', region: 'South' },
    { id: 22, name: 'Massachusetts', region: 'Northeast' },
    { id: 23, name: 'Michigan', region: 'Midwest' },
    { id: 24, name: 'Minnesota', region: 'Midwest' },
    { id: 25, name: 'Mississippi', region: 'South' },
    { id: 26, name: 'Missouri', region: 'Midwest' },
    { id: 27, name: 'Montana', region: 'West' },
    { id: 28, name: 'Nebraska', region: 'Midwest' },
    { id: 29, name: 'Nevada', region: 'West' },
    { id: 30, name: 'New Hampshire', region: 'Northeast' },
    { id: 31, name: 'New Jersey', region: 'Northeast' },
    { id: 32, name: 'New Mexico', region: 'West' },
    { id: 33, name: 'New York', region: 'Northeast' },
    { id: 34, name: 'North Dakota', region: 'Midwest' },
    { id: 35, name: 'North Carolina', region: 'South' },
    { id: 36, name: 'Ohio', region: 'Midwest' },
    { id: 37, name: 'Oklahoma', region: 'South' },
    { id: 38, name: 'Oregon', region: 'West' },
    { id: 39, name: 'Pennsylvania', region: 'Northeast' },
    { id: 40, name: 'Rhode Island', region: 'Northeast' },
    { id: 41, name: 'South Carolina', region: 'South' },
    { id: 42, name: 'South Dakota', region: 'Midwest' },
    { id: 43, name: 'Tennessee', region: 'South' },
    { id: 44, name: 'Texas', region: 'South' },
    { id: 45, name: 'Utah', region: 'West' },
    { id: 46, name: 'Vermont', region: 'Northeast' },
    { id: 47, name: 'Virginia', region: 'South' },
    { id: 48, name: 'Washington', region: 'South' },
    { id: 49, name: 'West Virginia', region: 'South' },
    { id: 50, name: 'Wisconsin', region: 'Midwest' },
    { id: 51, name: 'Wyoming', region: 'West' }
  ];

}

const statesWithFlags = [
  {'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},
  {'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},
  {'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},
  {'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},
  {'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},]

export interface IAlert {
  id: number;
  type: string;
  message: string;
}