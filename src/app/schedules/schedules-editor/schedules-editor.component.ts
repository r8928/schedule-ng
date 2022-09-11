import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Days } from 'src/app/shared/models/models';

@Component({
  selector: 'app-schedules-editor',
  templateUrl: './schedules-editor.component.html',
  styleUrls: ['./schedules-editor.component.scss'],
})
export class SchedulesEditorComponent implements OnInit {
  daysList = Days;
  teachersDropdown = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getTeachersDropdown().subscribe({
      next: (res: any) => {
        this.teachersDropdown = res.data;
      },
      error: (e: any) => {},
    });
  }
}
