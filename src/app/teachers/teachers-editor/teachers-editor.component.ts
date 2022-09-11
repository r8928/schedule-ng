import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { Classes, Subjects } from 'src/app/shared/models/models';

@Component({
  selector: 'app-teachers-editor',
  templateUrl: './teachers-editor.component.html',
  styleUrls: ['./teachers-editor.component.scss'],
})
export class TeachersEditorComponent implements OnInit {
  classList = Classes;
  subjectList = Subjects;
  form: any = { name: '', qualifications: '', classes: {}, subjects: {} };

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  save() {
    this.api.createTeacher(this.form).subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/teachers');
      },
      error: (e) => {
        if (e.status === 422) {
          alert(Object.values(e.error.errors).join('\n'));
        }
      },
    });
  }
}
