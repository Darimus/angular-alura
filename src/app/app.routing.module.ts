import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

const routes: Routes = [
    { path: 'user/flavio', component: PhotoListComponent},
    { path: 'p/add', component:  PhotoFormComponent}
];

@NgModule ({

})

export class AppRoutingModule {  }