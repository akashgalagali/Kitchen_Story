export class Items {
    public id?:number;
    public itemName?:string;
    public price?:number;
    public caleroies?:number;
    public description?:string;
    public qtyAvailable?:number;

    public constructor(id:number,itemName:string,price:number,caleroies:number,description:string,qtyAvailable:number){
        this.id=id;this.itemName=itemName;this.price=price;
        this.caleroies=caleroies;this.description=description;
        this.qtyAvailable=qtyAvailable;
    }

}
