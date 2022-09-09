import { Component, OnInit } from '@angular/core';
import { Days } from 'src/app/shared/models/models';

@Component({
  selector: 'app-schedules-editor',
  templateUrl: './schedules-editor.component.html',
  styleUrls: ['./schedules-editor.component.scss'],
})
export class SchedulesEditorComponent implements OnInit {
  daysList = Days;

  constructor() {}

  ngOnInit(): void {}
}
