import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, filter, forkJoin, map, Observable, of, pairwise, tap} from 'rxjs';
import {environment} from "../environments/environment";
import { NEW } from './constants';
import {Reponse} from './reponse.model';
import {News} from "./news.model";

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  news: News[] = [];
  uri_api = environment.apiUrl + NEW;

  constructor(
    private http: HttpClient) {
  }

  getNews(page: number, limit: number): Observable<Reponse> {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYW50ZW5haW5hQGdtYWlsLmNvbSIsImlhdCI6MTY5MTA4NDcyOCwiZXhwIjoxNjkxMDg2NTI4fQ.suNsxw2xrKb6p_--m1KPTgY7ifNvFS5i27KMHY5CdN4';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const params = new HttpParams()
      .set('page', page)
      .set('size', limit);
    return this.http.get<Reponse>(this.uri_api, {headers,params});
  }
}
