import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) { }

  getRecepies = (value) => {
    this.http.post('http://localhost:1337/api/recipes', {
        keyword: value
      }).subscribe((data) => {
        console.log('The data is: ', data);
        return data;
      });
  }
}
