import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts/accounts.service';
import { ItemServiceService } from '../item-service.service';
import { Items } from '../items';

@Component({
  selector: 'app-all-items-admin',
  templateUrl: './all-items-admin.component.html',
  styleUrls: ['./all-items-admin.component.css']
})
export class AllItemsAdminComponent implements OnInit {
  items?:Items[];
  constructor(private _itemService:ItemServiceService,private _as:AccountsService, private _router: Router ) {
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }
    else
    this.getAllItems();
   }
getAllItems(){
  this.items=this._itemService.getAllItems();
}
removeItem(id:any){
  this._itemService.removeItem(id);
}
updateItem(id:any){
// this._itemService.updateItem(this.items);
}
  ngOnInit(): void {
  }

}
