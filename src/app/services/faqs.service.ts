import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  constructor(private http: HttpClient) { }

  getFaqs(): Observable<object> {
    return this.http.get<object>(`${environment.APIFAQS}`, {responseType: 'json'});
  }
}
