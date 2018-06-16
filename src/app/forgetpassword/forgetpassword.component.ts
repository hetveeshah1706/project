import { Component, OnInit } from '@angular/core';
import { ForgetpasswordService } from '../forgetpassword.service';
import { Router, ActivatedRoute } from '@angular/router';
import { for_pwd } from './for_pwd';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  email_id:string;
  password:string;
  id:string;
  arr:for_pwd[]=[];
   onDone(){
   this._abc.getUserById(this.email_id).subscribe(
     (data:for_pwd[])=>{
       console.log(data);
       this.email_id=data[0].email_id;
       this.password=data[0].password;
     }
   );
}
  onCancel(){
         this._route.navigate(['']);
      }

  constructor(private _abc:ForgetpasswordService,private _route:Router,private _actroute:ActivatedRoute) { }

  ngOnInit() {
  }

}
