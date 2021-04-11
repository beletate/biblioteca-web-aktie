import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { map, switchMap } from 'rxjs/operators';

import { ConfirmationDialogService } from 'src/app/share/confirmation-dialog/confirmation-dialog.service';
import { Book } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-register-books',
  templateUrl: './register-books.component.html',
  styleUrls: ['./register-books.component.css'],
  providers: [ConfirmationDialogService]
})
export class RegisterBooksComponent implements OnInit {

  bookForm: FormGroup

  constructor(
    public confirmationDialogService: ConfirmationDialogService,
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
      sinopse: ['', [Validators.required]],
      data_publicacao: ['', [Validators.required]],
      edicao: ['', [Validators.required]],
      editora: ['', [Validators.required]],
      idioma: ['', [Validators.required]],
      capa_url: ['', [Validators.required]],
    })
  }

  submit() {
    this.confirmationDialogService.confirm('Por favor, confirme...', `Deseja continuar?`)
      .then((confirmed) => {
        if (confirmed == true) {
          if (this.bookForm.value.id) {
            const updateBook = this.bookForm.getRawValue() as Book;
            this.BooksService.update(updateBook).subscribe(
              success => {
                alert('Livro editado.')
                this.formReset()
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
                this.formReset()
              },
              error => {
                alert('Erro ao cadastrar.')
              }
            )
          }
        }
        else if (confirmed == false) {

        }
      }
      )
      .catch(() => console.log('Request denied.'));

  }

  onFileChange(event) {
    const reader = new FileReader()

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files
      reader.readAsDataURL(file)

      reader.onload = () => {
        let imageSrc = reader.result as string
        this.bookForm.patchValue({ capa_url: imageSrc })
      }
    }
  }

  fillForm(book: Book) {
    this.bookForm.patchValue({
      id: book.id,
      titulo: book.titulo,
      autor: book.autor,
      sinopse: book.sinopse,
      data_publicacao: book.data_publicacao,
      edicao: book.edicao,
      editora: book.editora,
      idioma: book.idioma,
      capa_url: book.capa_url,
    })
  }

  formReset() {
    (<HTMLInputElement>document.getElementById('capa_url')).value = "";
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
