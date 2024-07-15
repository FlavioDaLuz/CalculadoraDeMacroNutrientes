
interface Idbconfig{
    host:string;
    user:string;
    password:string;
    database:string
    port:number
}





const dbconfig:Idbconfig = {
    host:'127.0.0.1',
    user:'root',
    password:'1234',
    database:'sys',
    port: 3306
}


export {dbconfig, Idbconfig}