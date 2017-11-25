import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CategoryBarang } from './category-barang.model';
import { ResponseWrapper } from '../../../shared';


@Injectable()
export class CategoryBarangService {

  serverPath: string="http://localhost:8088/api/categoryBarang";

  constructor(private http:Http) { }

  getAll(hal:number, jumlah:number):Observable<ResponseWrapper>{
    return this.http.get(this.serverPath+"\\"+hal+"\\"+jumlah )
      .map((res: Response)=> this.convertResponse(res));
  }

  getForTypeahead(hal:number, jumlah:number):Promise<any>{
    return this.http
      .get(this.serverPath+"\\"+hal+"\\"+jumlah )      
      .toPromise()
      .then((res: Response)=>{
        return res.json() || {};
      });  
  }


  getById(id:number):Observable<ResponseWrapper>{
    return this.http.get(`${this.serverPath}/${id}`)
      .map((res: Response)=>this.convertResponse(res));
  }

  save(categoryBarang : CategoryBarang):Observable<CategoryBarang>{
    console.log("save to server ==>", this.serverPath," [body] ==>", CategoryBarang," ==");
    return this.http.post(this.serverPath,categoryBarang)
      .map((res:Response) => res.json() );
  }

  private convertResponse(res: Response): ResponseWrapper {
    const jsonResponse = res.json();
    return new ResponseWrapper(res.headers, jsonResponse, res.status);
  }

}
