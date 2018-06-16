import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { editpro } from './editprofile/editpro';


@Injectable({
  providedIn: 'root'
})
export class EditprofileService {
  private url:string='http://localhost:3000/editprofile/';
  constructor(private _http:HttpClient) { }
  getEditById(email_id:string)
  {
    return this._http.get(this.url+email_id);
  }
  updateUser(item:editpro){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.email_id,body,{headers:head1});
  }
}
