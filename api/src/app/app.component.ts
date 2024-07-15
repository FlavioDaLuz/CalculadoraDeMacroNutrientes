import { Component } from '@angular/core';
import { IcreateNewRegister } from '../../../backend/models/IcreateNewRegister';
import { dbService } from '../../services/dbService';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { userDbService } from '../../services/userServices/userDbService,';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api';

 registers = new Observable<IcreateNewRegister[] | any>()
 users = new Observable<any>()
 

  constructor(public dbService: dbService, public location:Location, public userDbService:userDbService){
   this.getRegisterUsers();   
   this.getUsersDb()
  
  }


  getRegisterUsers(){
  this.registers = this.dbService.getDataBase();
  // console.log(this.registers)

  }  

  getUsersDb(){
    this.users = this.userDbService.getDataBase()
    // console.log(this.users)

    this.users.subscribe(
      (dados)=>{
        for(const user of dados){
      //  console.log(user.nome)
        }
      }
    )
  }

  goToWellcomePage(){
    window.location.assign('/wellcome')
  }
    

  goToLoginPage(){
    window.location.assign('/login')
  }
    
}
