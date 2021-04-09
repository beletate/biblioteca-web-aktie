import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListBooksComponent } from './list-books/list-books.component';
import { RegisterBooksComponent } from './register-books/register-books.component';
import { AngularMaterialModule } from '../share/angular-material/angular-material.module';



@NgModule({
  declarations: [
    ListBooksComponent,
    RegisterBooksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ]
})
export class BooksModule { }
