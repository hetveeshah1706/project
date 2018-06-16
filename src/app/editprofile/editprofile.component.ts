import { Component, OnInit } from '@angular/core';
import { EditprofileService } from '../editprofile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { editpro } from './editpro';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
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
  arr:editpro[]=[];
  onEdit(){
    this._xyz.updateUser(new editpro(this.email_id,this.password,this.user_name,this.mob_no,this.city,this.gender,this.address)).subscribe(
      (data:any)=>{
        this._route.navigate(['/viewprofile',this.email_id]);
      }
    );
  }
  constructor(private _xyz:EditprofileService,private _route:Router,private _actroute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this._actroute.snapshot.params['email_id'];
    this._xyz.getEditById(this.id).subscribe(
      (data:editpro[])=>{
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

