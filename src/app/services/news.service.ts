import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces';
import { Observable, map } from 'rxjs';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient ) { }

  getTopHeadlines(): Observable<Article[]>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/everything?q=apple&from=2023-07-24&to=2023-07-24&sortBy=popularity`, {
      params: {
        apiKey: apiKey
      }
    }).pipe( map( ({ articles }) => articles )
    );
  }
}
