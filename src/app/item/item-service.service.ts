import { Injectable } from '@angular/core';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  item?: Items;
  ind?: number;
  quantity: number = 0;
  isCust: boolean = true;
  itemByname?:Items;

  items: Items[] = new Array<Items>(
    new Items(1001, "dosa", 100, 100, "onion dosa ", 10),
    new Items(1002, "Idly", 50, 10, "Idly sambar", 100),
    new Items(1003, "vade", 40, 150, "Vade", 8),
    new Items(1004, "bisibelebath", 150, 15, "bisi bisi bisibele bath", 16),
  );
  constructor() {

  }
  getAllItems() {
    return this.items;
  }
  getItemByName(name: string) {
    this.itemByname=this.items.filter(x => x.itemName === name)[0];
    return this.items.filter(x => x.itemName === name);

  }
  orderItem(itemId: number, qty: number) {
    var ind = this.items.indexOf(this.items.filter(x => x.id == itemId)[0]);
    this.item = this.items.filter(x => x.id == itemId)[0];
    this.quantity = qty;
    this.item.qtyAvailable = Number(this.item.qtyAvailable) - qty;
    this.items.splice(Number(ind), 1, this.item);
  }
  addItem(i: any) {
    this.items.push(i);
  }
  getItemById(id: number) {
    return this.items.filter(x => x.id == id);
  }
  removeItem(id: number) {
    var i = this.items.filter(x => x.id == id)[0];
    this.ind = this.items.indexOf(i);
    this.items.splice(Number(this.ind), 1);
  }
  updateItem(item:Items){
    var ind = this.items.indexOf(this.items.filter(x => x.id == item.id)[0]);
    this.item = item;
    this.items.splice(Number(ind), 1, this.item);
  }
}
