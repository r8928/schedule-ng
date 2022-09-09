import { Component, OnInit } from '@angular/core';
import { Classes, Subjects } from 'src/app/shared/models/models';

@Component({
  selector: 'app-teachers-editor',
  templateUrl: './teachers-editor.component.html',
  styleUrls: ['./teachers-editor.component.scss'],
})
export class TeachersEditorComponent implements OnInit {
  classList = Classes;
  subjectList = Subjects;

  constructor() {}

  ngOnInit(): void {}
}
