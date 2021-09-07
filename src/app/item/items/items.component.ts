import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts/accounts.service';
import { __asyncDelegator } from 'tslib';
import { ItemServiceService } from '../item-service.service';
import { Items } from '../items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
items?:Items[];
y?:Items[];
name='';
cnt:number=0;
newName:string='';
newPrice:number=0;
newCaleroies:number=0;
newDescription:string='';
newQtyAvailable:number=0;
x:any;
uname:string='';
constructor(private _itemService:ItemServiceService,private _as:AccountsService, private _router:Router) {
  if(_as.loggedIn==false){
    this._router.navigate(['./login']);
    
  }
  else  
  this.getAllItems();
   }
getAllItems(){
  this.items=this._itemService.getAllItems();
  
}
getItemByName(){
  this.y=this._itemService.getItemByName(this.name);
 
}
addItem(){
  var c=this.items?.length;
  this.cnt=Number(c);
  this.x={"id":this.cnt+1,"itemName":this.newName,"price":this.newPrice,"caleroies":this.newCaleroies,"description":this.newDescription,"qtyAvailable":this.newQtyAvailable};
  this._itemService.addItem(this.x);
}
orderItem(id:any){
  this._router.navigate(['./order',id]);

}
logout(){
  this._as.loggedIn=false;
  this._router.navigate(['']);
}
  ngOnInit(): void {
    this.uname=this._as.uname;
    console.log(this.uname,this._as.user?.uname);
  }

}
