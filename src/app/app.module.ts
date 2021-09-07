import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemModule } from './item/item.module';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { AccountsModule } from './accounts/accounts.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemModule,
    FormsModule,
    CustomerModule,
    AdminModule,
    AccountsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
