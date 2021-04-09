import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Book } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-register-books',
  templateUrl: './register-books.component.html',
  styleUrls: ['./register-books.component.css']
})
export class RegisterBooksComponent implements OnInit {

  bookForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private BooksService: BooksService
  ) { }

  ngOnInit(): void {

    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.BooksService.getById(id))
      )
      .subscribe(book => this.fillForm(book)
      );

    this.bookForm = this.formBuilder.group({
      id: [null],
      titulo: ['', [Validators.required]],
      autor: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      data_lancamento: ['', [Validators.required]]
    })
  }

  submit() {
    if (this.bookForm.value.id) {
      const updateBook = this.bookForm.getRawValue() as Book;
      this.BooksService.update(updateBook).subscribe(
        success => {
          alert('Livro editado.')
          this.bookForm.reset()
        },
        error => {
          alert('Erro ao editar.')
        }
      )
    } else {
      const createBook = this.bookForm.getRawValue() as Book;
      this.BooksService.create(createBook).subscribe(
        success => {
          alert('Livro cadastrado.')
          this.bookForm.reset()
        },
        error => {
          alert('Erro ao cadastrar.')
        }
      )
    }
  }

  fillForm(book: Book) {
    this.bookForm.patchValue({
      id: book.id,
      titulo: book.titulo,
      autor: book.autor,
      descricao: book.descricao,
      data_lancamento: book.data_lancamento
    })
  }

  formReset() {
    this.bookForm.reset();
}
  checkError(field) {
    return {
      'has-danger': this.touchedVerify(field)
    };
  }

  touchedVerify(field) {
    return !this.bookForm.get(field).valid && this.bookForm.get(field).touched;
}
}
