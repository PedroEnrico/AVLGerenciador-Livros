import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/model/Book';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiUrl = 'https://localhost:7094/api/Livros/';

  constructor(private http: HttpClient) { }
  
  // GET - Recuperar todos os livros
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  // GET - Recuperar um livro específico
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}${id}`);
  }

  // POST - Adicionar novo livro
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  // PUT - Atualizar livro existente
  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}${id}`, book);
  }

  // DELETE - Excluir livro
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
