import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  url = 'https://opentdb.com/api.php?amount=10';
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(this.url, { headers: { Accept: 'application/json' } });
  }


}
