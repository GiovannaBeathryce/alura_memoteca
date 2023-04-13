import { Pensamento } from './thought';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = "http://localhost:3000/pensamentos"

  constructor(private http: HttpClient) { }

  create(pensamento:Pensamento):Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  list(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }

  updatePost(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  deletePost(id:number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  idSearch(id:number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

}
