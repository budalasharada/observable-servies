import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mydetails } from './details';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http:HttpClient) { }
   public getDetails():Observable<Mydetails[]>
   {
     const url="assets/data/employeedata.json";
     return this.http.get<Mydetails[]>(url);
   }

}
