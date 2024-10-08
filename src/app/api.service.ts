import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getMonsters(): Observable<any> {
    return this.http.get('http://localhost:3000/monsters');
  }

  getRaces(): Observable<any> {
    return this.http.get('http://localhost:3000/races');
  }

}
