import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { cp } from './changepassword/cp';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {
  private url:string='http://localhost:3000/changepassword/';
  updateUser(item:cp){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url,body,{headers:head1});
  }

  constructor(private _http:HttpClient) { }
}
