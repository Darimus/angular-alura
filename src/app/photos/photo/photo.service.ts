import { HttpClient } from "@angular/common/http";

export class PhotoService{

    constructor (private http: HttpClient){}

    listFronUser(userName: string){

        this.http
        .get<Object[]>('http://localhost:3000/flavio/photos')
        .subscribe(photos => this.photos = photos);
    }
}