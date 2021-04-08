import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../layout/header/header.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
