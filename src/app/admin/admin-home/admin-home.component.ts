import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts/accounts.service';
import { Users } from 'src/app/accounts/users';
import { ItemServiceService } from 'src/app/item/item-service.service';
import { Items } from 'src/app/item/items';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
newPassword='';
itemByname?:Items;
  items?:Items[];
  id:number=0;
  newName:string='';
  newPrice:number=0;
  newCaleroies:number=0;
  newDescription:string='';
  newQtyAvailable:number=0;
  x:any;
  msg:string='';
  Itemname:string='';
  constructor(private _as:AccountsService,private route: ActivatedRoute,private _itemService:ItemServiceService , private _router:Router) { 
   if(_as.loggedIn==false){
     this._router.navigate(['./login'])
   }
   else
    this.getAllUsers();
  }
  sub:any;
  uname:string='';
  users?:Users[];
  ngOnInit() {
   
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.uname=params["uname"];
    });
  }

  changePassword(){
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this._as.adminChangePassword(this.newPassword,params["uname"]);
    });  
  }
  remove(id:any){
this._as.remove(id);
  }
  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
getAllUsers(){
  this.users=this._as.getAllUsers();
}
preUpdate(){
  this.itemByname=this._itemService.getItemByName(this.Itemname)[0];
  //this.itemByname=this._itemService.itemByname;
  this.id=Number(this.itemByname?.id);
  this.newName=String(this.itemByname?.itemName);
  this.newPrice=Number(this.itemByname?.price);
  this.newCaleroies=Number(this.itemByname?.caleroies);
  this.newDescription=String(this.itemByname?.description);
  this.newQtyAvailable=Number(this.itemByname?.qtyAvailable)
}
update(){
this.x={"id":this.id,"itemName":this.newName,"price":this.newPrice,"caleroies":this.newCaleroies,"description":this.newDescription,"qtyAvailable":this.newQtyAvailable};
  this._itemService.updateItem(this.x);
  this.msg="the item is updated";
}
}
