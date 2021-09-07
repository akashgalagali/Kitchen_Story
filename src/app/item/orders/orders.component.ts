import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts/accounts.service';
import { ItemServiceService } from '../item-service.service';
import { Items } from '../items';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
qty=0;
item:Items={};
sub:any;
id:number=0;
uname:string='';
msg:string='';
  constructor(private _is:ItemServiceService,private _ac:AccountsService,private route: ActivatedRoute, private _router:Router) { 
    if(_ac.loggedIn==false){
      this._router.navigate(['./login'])
    }
  }
getById(id:number){
  this.item=this._is.getItemById(id)[0];
}
logout(){
  this._ac.loggedIn=false;
  this._router.navigate(['']);
}
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.id=params["id"];
    });
    this.getById(this.id);
    this.uname=this._ac.uname;
  }
  paymentPage(){
    if(Number(this.item.qtyAvailable)>this.qty){
    this._is.orderItem(this.id,this.qty);
    this._router.navigate(['./payment',this.id]);
    }else{
      this.msg="The entered quantity is more then the available quantity";
    }
  }

}
