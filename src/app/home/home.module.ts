import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '../share/angular-material/angular-material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app.routing.module';
import { RegisterBooksComponent } from '../books/register-books/register-books.component';
import { ListBooksComponent } from '../books/list-books/list-books.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterBooksComponent,
    ListBooksComponent
  ],
  imports: [
    CommonModule,    
    BrowserModule,
    RouterModule,    
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule
  ]
})
export class HomeModule { }
