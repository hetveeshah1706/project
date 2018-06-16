import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from './log';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email_id:string;
  password:string;
  arr:log[]=[];
  constructor(private _abc:LoginService,private _route:Router) { }
  onSignup(){
    this._route.navigate(['/signup']);
  }
  onForget(item:log){
    this._route.navigate(['/forgetpassword']);
  }
  onLogin(){
    console.log(this.email_id,this.password);

    this._abc.getUserById(new log(this.email_id,this.password)).subscribe(
      (data:any[])=>{
        console.log(data);
        if(data.length>0){
         alert("successfully login");
        this._route.navigate(['/viewprofile',this.email_id]);
      }
      else{
        alert("unsuccessful");
      }
    }


    );
    }


  ngOnInit() {
  }

}
