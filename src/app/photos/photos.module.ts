import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent ],
    imports: [ 
        HttpClientModule,
        CommonModule
    ]
})

export class PhotosModule {}