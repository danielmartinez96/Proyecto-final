import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }
}
