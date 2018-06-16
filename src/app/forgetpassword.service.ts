import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { for_pwd } from './forgetpassword/for_pwd';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {
  private url:string='http://localhost:3000/forgetpassword/';

  constructor(private _http:HttpClient) { }
  getUserById(email_id:string){
    return this._http.get(this.url+email_id);
  }
}
