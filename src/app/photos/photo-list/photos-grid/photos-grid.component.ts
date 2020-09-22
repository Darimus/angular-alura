import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos-grid', //ap de alura pic
  templateUrl: './photos-grid.component.html',
  styleUrls: ['./photos-grid.component.css']
})
export class PhotosGridComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any [] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos)
        this.rows = this.groupColumns(this.photos);
}
 
  groupColumns (photos: Photo[]) {
    const newRows = [];
    
    for(let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index + 3));
  }

    return newRows;
  }
}
