import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "src/app/shared/components/card/card.module";
import { PhotoModule } from "../photo/photo.module";

import { filterByDescription } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosGridComponent } from "./photos-grid/photos-grid.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosGridComponent,
        LoadButtonComponent,
        filterByDescription,
        SearchComponent
    ],

    imports: [ 
        CommonModule,
        PhotoModule,
        CardModule
    ]
})

export class PhotoListModule {

}