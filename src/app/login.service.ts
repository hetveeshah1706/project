import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { log } from './login/log';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string='http://localhost:3000/login/';


  constructor(private _http:HttpClient) { }
  getUser(){
    return this._http.get(this.url);
  }
  getUserById(item:log){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
}
