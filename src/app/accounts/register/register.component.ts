import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
newUname='';
newPwd='';
location='';
mail='';
cust:any;
idUsers:any;
cnt:number=0;
  constructor(private _ac:AccountsService,private _router:Router) { }
addCust(){
  this.idUsers=this._ac.getAllUsers();
  var c=this.idUsers.length;
  this.cnt=this.idUsers[Number(c)-1].id;
 
 this.cust= {"id":0,"uname":this.newUname,"pwd":this.newPwd,"role":"cust","location":this.location,"mail":this.mail}
  this._ac.addCust(this.cust);
  this._router.navigate(['./login'])
}
  ngOnInit(): void {
  }

}
