import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Receita} from "../models/receita.model";

const baseUrl = 'http://localhost:8080/api/receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Receita[]> {
    return this.http.get<Receita[]>(baseUrl);
  }

  get(id: any): Observable<Receita> {
    return this.http.get<Receita>(`${baseUrl}/${id}`);
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

  likeRecipe(id: number, usuarioid: number) {
    return this.http.post(`${baseUrl}/${id}/${usuarioid}/like`, null);
  }
  dislikeRecipe(id: number, usuarioid: number) {
    return this.http.delete(`${baseUrl}/${id}/${usuarioid}/dislike`);
  }
  checkLikeStatus(id: number) {
    return this.http.get<boolean>(`${baseUrl}/${id}/likeStatus`);
  }
  checkIfRecipeLiked(id: number, usuarioid: number): Observable<boolean> {
    return this.http.get<boolean>(`${baseUrl}/${id}/${usuarioid}/isliked`);
    }
}