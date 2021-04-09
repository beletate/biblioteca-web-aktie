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
    console.log(book)
    console.log(this.http.post(`${API}create`, book).pipe(take(1)))
    return this.http.post(`${API}create`, book).pipe(take(1));
  }
  
  read(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API}`)
  }

  update(livro){
    return this.http.put(`${API}update/${livro.id}`,livro).pipe(take(1));
  }

  delete(id) {
    return this.http.delete<Book[]>(`${API}delete/${id}`);
  }

  getById(id) {
    if (!id) return EMPTY;
    return this.http.get<Book>(`${API}show/${id}`);
  }
}
