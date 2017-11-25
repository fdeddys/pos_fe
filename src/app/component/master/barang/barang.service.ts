import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Barang } from './barang.model';
import { ResponseWrapper } from '../../../shared';


@Injectable()
export class BarangService {

  serverPath: string="http://localhost:8088/api/barang";

  constructor(private http:Http) { }

  getBarangs(hal:number, jumlah:number):Observable<ResponseWrapper>{
    return this.http.get(this.serverPath+"\\"+hal+"\\"+jumlah )
      .map((res: Response)=> this.convertResponse(res));
  }

  getBarang(id:number):Observable<Barang>{
    return this.http.get(`${this.serverPath}/${id}`)
      .map((res: Response)=> res.json() );
  }

  save(barang : Barang):Observable<Barang>{
    console.log("save to server ==>", this.serverPath," [body] ==>", barang," ==");
    return this.http.post(this.serverPath,barang)
      .map((res:Response) => res.json() );
  }

  private convertResponse(res: Response): ResponseWrapper {
    const jsonResponse = res.json();
    return new ResponseWrapper(res.headers, jsonResponse, res.status);
  }

}
