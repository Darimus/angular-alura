import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  photos: Object[] = [];

  constructor(http: HttpClient){
    http
    .get<Object[]>('http://localhost:3000/flavio/photos')
    .subscribe(photos => this.photos = photos);
  }
  
}
