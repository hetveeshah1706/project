import { Component, OnInit } from '@angular/core';
import { view_pro } from './view_pro';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewprofileService } from '../viewprofile.service';


@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  c:string[]=[
    'ahmedabad',
    'bombay',
    'surat'
  ];
  id:string;
  email_id:string;
  user_name:string;
  password:string;
  mob_no:string;
  city:string;
  gender:string;
  address:string;
  arr:view_pro[]=[];
  onView(item:view_pro)
  {
     this._route.navigate(['/editprofile',this.email_id]);
    }
    onPwd()
    {
      this._route.navigate(['/changepassword']);
    }

  constructor(private _abc:ViewprofileService,private _route:Router,private _actroute:ActivatedRoute) { }

  ngOnInit() {

    this.id=this._actroute.snapshot.params['email_id'];
    this._abc.getLoginById(this.id).subscribe(
      (data:view_pro[])=>{
        console.log(data);
        this.email_id=data[0].email_id;
        this.password=data[0].password;
        this.user_name=data[0].user_name;
        this.mob_no=data[0].mob_no;
        this.city=data[0].city;
        this.gender=data[0].gender;
        this.address=data[0].address;
      }
    );

  }

}
