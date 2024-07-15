import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {enviroment1, teste } from "./enviroment";
import { IcreateNewRegister } from "../../backend/models/IcreateNewRegister";

@Injectable({
    providedIn:'root'
})

export class dbService {
    private url = enviroment1.api

    constructor(private httpClient: HttpClient){}

    getDataBase(){
        return this.httpClient.get<IcreateNewRegister[]>(this.url)
    }

    createNewRegister(register:any){
        return this.httpClient.post(this.url, register)
    }

    
}

