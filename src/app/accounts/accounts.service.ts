import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
loggedIn:boolean=false;
user?:Users;
ind:number=0;
uname:string='';
  users:Users[]=[
  new Users(1001,"akash","akash","admin","Banglore","akash@gmail.com"),
  new Users(1002,"ashu","kumar","cust","Gulbarga","ashu@gmail.com"),
  new Users(1003,"kiran","pass","cust","Hyderabad","kiran@gmail.com"),
  new Users(1004,"krish","pass","admin","Raichur","krish@gmail.com"),
];

  constructor() { }
  validateUser(uname:string,pwd:string,role:string):boolean{
    
    var user=this.users.filter(x=>x.uname==uname)[0];
    if(user.uname===uname && user.pwd===pwd && user.role===role){
      this.loggedIn= true;
      this.uname=user.uname;
    }
    else{
      this.loggedIn=false;
    }
    return this.loggedIn;
  }
  adminChangePassword(pwd:string,uname:string){
     this.user= this.users.filter(x=>x.uname==uname)[0];
     if(this.user.role==='admin'){
       this.user.pwd=pwd;
     }
  }
  addCust(cust:Users){
    this.users.push(cust); 
  }
  getAllUsers(){
    return this.users;
  }
  remove(id:any){
var i =this.users.filter(x=>x.id==id)[0];
this.ind=this.users.indexOf(i);
this.users.splice(Number(this.ind),1);
  }
}
