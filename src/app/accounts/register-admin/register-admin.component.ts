import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  cust:any;
  newUname='';
  newPwd='';
location='';
mail='';
msg:string='';
idUsers:any;
cnt:number=0;
  constructor(private _ac:AccountsService) { }
  addAdmin(){
    this.idUsers=this._ac.getAllUsers();
    var c=this.idUsers.length;
    this.cnt=this.idUsers[Number(c)-1].id;
    this.cust= {"id":this.cnt+1,"uname":this.newUname,"pwd":this.newPwd,"role":"admin","location":this.location,"mail":this.mail}
     this._ac.addCust(this.cust);
     this.msg="New Admin data added Successfuly!"
   }
  ngOnInit(): void {
  }

}
