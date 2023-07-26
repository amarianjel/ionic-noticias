import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient ) { }

  getTpHeadlines(){
    return this.http.get(`https://newsapi.org/v2/everything?q=apple&from=2023-07-24&to=2023-07-24&sortBy=popularity`, {
      params: {
        apiKey: apiKey
      }
    });
  }
}
