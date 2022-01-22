import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as _env } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  root_url = _env.unsplash_url; 
  constructor(private httpClient : HttpClient) { }

  listPhotos(page : number = 1) : Observable<any> {
    const query = this.root_url + `photos?page=${page}`;
    return this.httpClient.get(query);
  }
  getPhotosByKeyword(keyword: string, page : number = 1): Observable<any> {
    const query = this.root_url + `search/photos?page=${page}&query=${keyword}`;
    return this.httpClient.get(query)
  }
}
