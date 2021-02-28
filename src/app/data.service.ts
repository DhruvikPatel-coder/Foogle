import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(
    private http: HttpClient,
  ) { }

  getRecepies = (value) => {
    return this.http.post('http://localhost:1337/api/recipes', {keyword: value})
      .pipe(map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError('Something went wrong', error);
      })
    );
  }
}
