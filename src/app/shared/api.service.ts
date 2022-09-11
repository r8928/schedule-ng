import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.baseUrl;
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  constructor(private http: HttpClient) {}

  getTeachers = () => this.http.get(this.baseUrl + 'teachers');

  createTeacher = (data: Record<string, any>) =>
    this.http.post(this.baseUrl + 'teachers', data, { headers: this.header });
}
