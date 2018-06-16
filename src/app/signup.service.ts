import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { sign_up } from './signup/sign_up';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url:string='http://localhost:3000/signup';

  constructor(private _http:HttpClient) { }
  addUser(item:sign_up){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
}
