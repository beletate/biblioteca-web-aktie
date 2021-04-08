import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBooksComponent } from './list-books/list-books.component';
import { RegisterBooksComponent } from './register-books/register-books.component';



@NgModule({
  declarations: [
    ListBooksComponent,
    RegisterBooksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
