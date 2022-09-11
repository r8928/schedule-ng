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

  getTeachersDropdown = () => this.http.get(this.baseUrl + 'teachers/dropdown');

  getTeacher = (teacher_id: number) =>
    this.http.get(this.baseUrl + `teachers/${teacher_id}`);

  createTeacher = (data: Record<string, any>) =>
    this.http.post(this.baseUrl + 'teachers', data, { headers: this.header });

  updateTeacher = (data: Record<string, any>) =>
    this.http.put(this.baseUrl + `teachers/${data['id']}`, data, {
      headers: this.header,
    });
}
