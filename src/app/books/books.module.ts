import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ListBooksComponent } from './list-books/list-books.component';
import { RegisterBooksComponent } from './register-books/register-books.component';
import { AngularMaterialModule } from '../share/angular-material/angular-material.module';
import { AppRoutingModule } from '../app.routing.module';



@NgModule({
  declarations: [
    ListBooksComponent,
    RegisterBooksComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports:[
    ListBooksComponent,
    RegisterBooksComponent
  ]
})
export class BooksModule { }
