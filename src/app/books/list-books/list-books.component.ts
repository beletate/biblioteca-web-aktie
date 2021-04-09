import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  booksForm: FormGroup
  livros: Book[]=[]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private BookService: BooksService
  ) { }

  ngOnInit(): void {
    this.getAllBooks();

    this.booksForm = this.formBuilder.group({
      findAll: ['']
    })
  }

  getAllBooks() {
    this.BookService.read().subscribe(result => { this.livros = result;})
  }

  updateBook(id) {
    this.router.navigate(['/cadastro/livro', id])
  }

  deleteBook(id) {
    if (window.confirm('Tem certeza que deseja excluir este livro?')) {
      this.BookService.delete(id).subscribe(result => { this.livros = result; })
      alert('Livro excluído.')
      this.getAllBooks()
    }
  }
}
