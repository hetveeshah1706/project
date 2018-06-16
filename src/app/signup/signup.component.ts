import { Component, OnInit } from '@angular/core';
import { sign_up } from './sign_up';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  c:string[]=[
    'ahmedabad',
    'bombay',
    'surat'
  ];
  email_id:string;
  user_name:string;
  password:string;
  mob_no:string;
  city:string;
  gender:string;
  address:string;
  arr:sign_up[]=[];
  onAdd(){
    this._abc.addUser(new sign_up(this.email_id,this.password,this.user_name,this.mob_no,this.city,this.gender,this.address)).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr.push(new sign_up(this.email_id,this.password,this.user_name,this.mob_no,this.city,this.gender,this.address))
        this._route.navigate(['']);
      }


    );
  }

  constructor(private _abc:SignupService,private _route:Router) { }

  ngOnInit() {
  }

}
