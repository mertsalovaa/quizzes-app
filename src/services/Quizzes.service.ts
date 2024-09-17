import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/Category.model';
import { categories } from '../utils/categories';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  constructor(private http: HttpClient) {}
  getCategByName(name: string): CategoryModel {
    return (
      categories.find((x) => x.name.toLowerCase() == name) || {
        id: categories.length,
        name: 'random',
        code: 0,
      }
    );
  }
  getData(category: number): Observable<any> {
    return this.http.get(
      `https://opentdb.com/api.php?amount=10${
        category == 0 ? '' : `&category=${category}`
      }&type=boolean`,
      { headers: { Accept: 'application/json' } }
    );
  }
}
