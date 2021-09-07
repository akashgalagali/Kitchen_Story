import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts/accounts.service';
import { ItemServiceService } from '../item-service.service';
import { Items } from '../items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items?:Items[];
  constructor(private _itemService:ItemServiceService,private _as:AccountsService , private _router:Router) { 
    this.getAllItems();
  }
  getAllItems(){
    this.items=this._itemService.getAllItems();
  }
  ngOnInit(): void {
  }

}
