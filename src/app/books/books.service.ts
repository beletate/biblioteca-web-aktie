import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';


import { take } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Book } from './books';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }

  create(book: Book) {
    return this.http.post(`${API}livros`, book).pipe(take(1));
  }

  read(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API}livros`)
  }

  update(livro) {
    return this.http.put(`${API}livros/${livro.id}`, livro).pipe(take(1));
  }

  delete(id) {
    return this.http.delete<Book[]>(`${API}livros/${id}`);
  }

  getById(id) {
    if (!id) return EMPTY;
    return this.http.get<Book>(`${API}livros/${id}`);
  }
}
