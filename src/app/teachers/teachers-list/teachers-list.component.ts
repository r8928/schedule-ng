import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss'],
})
export class TeachersListComponent implements OnInit {
  teachers: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getTeachers().subscribe((res: any) => {
      this.teachers = res.data;
    });
  }
}
