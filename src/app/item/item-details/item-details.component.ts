import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts/accounts.service';
import { ItemServiceService } from '../item-service.service';
import { Items } from '../items';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  y?:Items[];
  name='';
  isCust:boolean=true;
  uname:string='';
  constructor(private _itemService:ItemServiceService, private _router:Router,private _ac:AccountsService) {
    if(_ac.loggedIn==false){
      this._router.navigate(['./login'])
    }
    else
    this.isCust=this._itemService.isCust;
   }

getItemByName(){
  this.y=this._itemService.getItemByName(this.name);
 
}
orderItem(id:any){
  this._router.navigate(['./order',id]);

}
logout(){
  this._ac.loggedIn=false;
  this._router.navigate(['']);
}
  ngOnInit(): void {
    this.uname=this._ac.uname;
  }

}
