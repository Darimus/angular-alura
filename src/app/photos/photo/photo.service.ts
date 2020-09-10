import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})

export class PhotoService{

    constructor (private http: HttpClient){}

    listFronUser(userName: string){

        return this.http
        .get<Object[]>('http://localhost:3000/flavio/photos')

    }
}