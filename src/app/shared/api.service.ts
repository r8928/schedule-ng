import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getTeachers() {
    return this.http.get(this.baseUrl + 'teachers');
  }
}
