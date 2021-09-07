export class Users {
    public id?:number;
    public uname?:string;
    public pwd?:string;
    public role?:string;
    public location?:string;
    public mail?:string;
    public constructor(id:number,uname:string,pwd:string,role:string,location:string,mail:string){
        this.id=id;this.uname=uname;this.pwd=pwd;
        this.role=role;this.location=location;this.mail=mail;
    }
}
