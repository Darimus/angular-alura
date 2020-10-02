import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {


  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute){ }
  
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];

    this.debounce.subscribe(filter => this.filter = filter);
  }
  
}
