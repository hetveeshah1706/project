import { Component, OnInit } from '@angular/core';
import { ChangepasswordService } from '../changepassword.service';
import { Router, ActivatedRoute } from '@angular/router';
import { cp } from './cp';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  email_id:string;
  password:string;
  id:string;
onSave(){
  this._abc.updateUser(new cp(this.email_id,this.password)).subscribe(
    (data:cp[])=>{
      console.log(data);
     }
      );
}
onCancel(){
  this._route.navigate(['']);
}


  constructor(private _abc:ChangepasswordService,private _route:Router,private _actroute:ActivatedRoute) { }

  ngOnInit() {

  }

}
