import { Component, OnInit } from '@angular/core';import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts/accounts.service';
import { ItemServiceService } from '../item-service.service';
import { Items } from '../items';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  qty=0;
  item:Items={};
  sub:any;
  id:number=0;
  uname:string='';
  msg:string='';
  method:string='';
  price:number=0;
  GST:number=0;
  total:number=0;
  constructor(private _is:ItemServiceService,private _ac:AccountsService , private route: ActivatedRoute, private _router: Router ) { 
    if(_ac.loggedIn==false){
      this._router.navigate(['./login'])
    }
  }
  getById(id:number){
    this.item=this._is.getItemById(id)[0];
    this.qty=this._is.quantity;
    this.price=this.qty*Number(this.item.price);
    this.GST=(0.18)*Number(this.price);
    this.total=this.price+this.GST;
   
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
placeOrder(){
  this._router.navigate(['./confirm',this.id]);
}
}
