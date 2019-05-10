import { Injectable } from '@angular/core';
import { Proyecto } from '../modelo/proyecto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private serviceUrl = 'http://localhost:3000/proyectos';

  constructor(private http: HttpClient) { }

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.serviceUrl);
  }
  crear(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.serviceUrl,proyecto);
  }
}
