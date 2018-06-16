import { Injectable } from '@angular/core';
import { view_pro } from './viewprofile/view_pro';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ViewprofileService {
  private url:string='http://localhost:3000/viewprofile/';
  constructor(private _http:HttpClient) { }
  getLoginById(email_id:string)
  {
    return this._http.get(this.url+email_id);
  }
}
