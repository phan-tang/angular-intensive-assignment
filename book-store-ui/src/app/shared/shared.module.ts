import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    PageNotFoundComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
