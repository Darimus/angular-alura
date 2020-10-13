import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";

@NgModule({

    imports: [ 
        PhotosModule,
        PhotoFormModule,
        PhotoListModule,
        HttpClientModule,
        CommonModule
    ]
})

export class PhotosModule {}