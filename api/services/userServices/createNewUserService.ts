import { userDbService } from "./userDbService,";



export class createNewUserService {

    constructor(private userDbService:userDbService){}

    postUser(usuario:any){
        this.userDbService.createNewUser(usuario).subscribe(()=> this.userDbService.getDataBase())

        
    
    }
}