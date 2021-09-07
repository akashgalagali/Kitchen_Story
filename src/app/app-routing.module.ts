import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterAdminComponent } from './accounts/register-admin/register-admin.component';
import { RegisterComponent } from './accounts/register/register.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { HomeComponent } from './item/home/home.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';
import { ItemsComponent } from './item/items/items.component';
import { MenuComponent } from './item/menu/menu.component';
import { OrderConfirmComponentComponent } from './item/order-confirm-component/order-confirm-component.component';
import { OrdersComponent } from './item/orders/orders.component';
import { PaymentComponent } from './item/payment/payment.component';

const routes: Routes = [
  {"path":"adminHome/:uname",component:AdminHomeComponent},
  {"path":"login",component:LoginComponent},
  {"path":"items",component:ItemsComponent},
  {"path":"",component:HomeComponent},
  {"path":"register",component:RegisterComponent},
  {"path":"order/:id",component:OrdersComponent},
  {"path":"addItem",component:AddItemComponent},
  {"path":"registerAdmin",component:RegisterAdminComponent}, 
  {"path":"searchItem",component:ItemDetailsComponent},
  {"path":"custHome/:uname",component:CustomerHomeComponent},
  {"path":"confirm/:id",component:OrderConfirmComponentComponent},
  {"path":"menu",component:MenuComponent},
  {"path":"payment/:id",component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
