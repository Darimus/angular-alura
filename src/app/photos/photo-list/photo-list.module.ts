import { NgModule } from "@angular/core";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosGridComponent } from "./photos-grid/photos-grid.component";

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosGridComponent,
        LoadButtonComponent
    ]  
})

export class PhotoListModule {

}