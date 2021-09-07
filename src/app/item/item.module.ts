import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { AccountsModule } from '../accounts/accounts.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AllItemsAdminComponent } from './all-items-admin/all-items-admin.component';
import { OrderConfirmComponentComponent } from './order-confirm-component/order-confirm-component.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';




@NgModule({
  declarations: [
    ItemsComponent,
    HomeComponent,
    OrdersComponent,
    ItemDetailsComponent,
    AddItemComponent,
    AllItemsAdminComponent,
    OrderConfirmComponentComponent,
    MenuComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountsModule,
    RouterModule
  ],
  exports:[ItemsComponent,HomeComponent,
    ItemDetailsComponent,
    AddItemComponent,
    AllItemsAdminComponent,
    OrderConfirmComponentComponent,
    MenuComponent,
    PaymentComponent
  
  ]
})
export class ItemModule { }
