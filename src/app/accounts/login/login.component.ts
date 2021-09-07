import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemServiceService } from 'src/app/item/item-service.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname='';
pwd='';
role='';

  constructor(private _as:AccountsService,private _router:Router , private _is:ItemServiceService) { }
validateUser(){
  if(this._as.validateUser(this.uname,this.pwd,this.role)){
    if(this.role=='admin'){
      alert("Welcome to Admin page");
      this._is.isCust=false;
      this._router.navigate(['./adminHome',this.uname]);
    }
    else{
      alert("Welcome to Customer page");
      this._is.isCust=true;
      this._router.navigate(['./custHome',this.uname]);
    }
  }
  else{
    alert("Invalid Credientials");
  }
}
  ngOnInit(): void {
  }

}
