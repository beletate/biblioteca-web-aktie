import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from 'src/app/share/confirmation-dialog/confirmation-dialog.service';
import { Book } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
  providers: [ConfirmationDialogService]
})
export class ListBooksComponent implements OnInit {

  booksForm: FormGroup
  livros: Book[] = []

  constructor(
    public confirmationDialogService: ConfirmationDialogService,
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
    this.BookService.read().subscribe(result => { this.livros = result; })
  }

  updateBook(id) {
    this.router.navigate(['/cadastro/livro', id])
  }

  deleteBook(id) {
    console.log(this.booksForm.value)
    this.confirmationDialogService.confirm('Por favor, confirme...', 'Deseja realmente prosseguir com a exclusão do livro?')
      .then((confirmed) => {
        if (confirmed == true) {
          this.BookService.delete(id).subscribe(result => { this.livros = result; })
          alert('Livro excluído.')
          this.getAllBooks()
        }
        else if (confirmed == false) {

        }
      }
      )
      .catch(() => console.log('Request denied.'));
  }
}
