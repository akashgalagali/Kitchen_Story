import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts/accounts.service';
import { Users } from 'src/app/accounts/users';
import { ItemServiceService } from 'src/app/item/item-service.service';
import { Items } from 'src/app/item/items';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
items?:Items[];
sub:any;
uname:string='';
users?:Users[];
constructor(private _is:ItemServiceService,private _as:AccountsService , private route:ActivatedRoute, private _router:Router) {
  if(_as.loggedIn==false){
    this._router.navigate(['./login'])
  }
  else  
  this.getAllItems();
   }
getAllItems(){
  this.items=this._is.getAllItems();
}
orderItem(id:any){
  this._router.navigate(['./order',id]);

}
logout(){
  this._as.loggedIn=false;
  this._router.navigate(['']);
}
ngOnInit() {
 
  this.sub = this.route.params.subscribe(params => {
    console.log(params);
    this.uname=params["uname"];
  });
}
}
