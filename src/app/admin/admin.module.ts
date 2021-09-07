import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule } from '@angular/forms';
import { AccountsModule } from '../accounts/accounts.module';
import { RouterModule } from '@angular/router';
import { ItemModule } from '../item/item.module';



@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountsModule,
    RouterModule,
    ItemModule
  ],
  exports:[
    AdminHomeComponent
  ]
})
export class AdminModule { }
