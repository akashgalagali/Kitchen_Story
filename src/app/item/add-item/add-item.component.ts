import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts/accounts.service';
import { ItemServiceService } from '../item-service.service';
import { Items } from '../items';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  items?:Items[];
  idItems:any;
  cnt:number=0;
  newName:string='';
  newPrice:number=0;
  newCaleroies:number=0;
  newDescription:string='';
  newQtyAvailable:number=0;
  x:any;
  msg:string='';
  constructor(private _as:AccountsService,private _itemService:ItemServiceService, private _router:Router) {
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }
    else
    this.getAllItems();
   }
getAllItems(){
  this.items=this._itemService.getAllItems();
}
  ngOnInit(): void {
  }

  addItem(){
    this.idItems=this.items;
    var c=this.items?.length;
    this.cnt=this.idItems[Number(c)-1].id;
    console.log(this.idItems[Number(c)]);
    this.x={"id":this.cnt+1,"itemName":this.newName,"price":this.newPrice,"caleroies":this.newCaleroies,"description":this.newDescription,"qtyAvailable":this.newQtyAvailable};
    this._itemService.addItem(this.x);
    this.msg="Item Added Successfuly!!";
  }
}
