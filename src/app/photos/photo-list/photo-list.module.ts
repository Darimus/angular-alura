import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoModule } from "../photo/photo.module";

import { filterByDescription } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosGridComponent } from "./photos-grid/photos-grid.component";

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosGridComponent,
        LoadButtonComponent,
        filterByDescription
    ],

    imports: [ 
        CommonModule,
        PhotoModule
    ]
})

export class PhotoListModule {

}