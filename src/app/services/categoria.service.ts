import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/api/categoria';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {
  [x: string]: any;
 
  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(baseUrl);
  }

  get(id: any): Observable<Categoria> {
    return this.http.get<Categoria>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
