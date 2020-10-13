import { NgModule } from "@angular/core";
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
    ]  
})

export class PhotoListModule {

}