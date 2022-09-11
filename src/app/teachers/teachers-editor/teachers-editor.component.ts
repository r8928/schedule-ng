import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
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
  form: any = {
    id: null,
    name: '',
    qualifications: '',
    classes: {},
    subjects: {},
  };
  isNew = true;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (
      this.route.snapshot.params['id'] &&
      this.route.snapshot.params['id'] !== 'new'
    ) {
      this.isNew = false;
      this.form.id = this.route.snapshot.params['id'];
    }
  }

  ngOnInit(): void {
    if (!this.isNew) {
      this.getTeacher();
    }
  }

  getTeacher() {
    this.api.getTeacher(this.form.id).subscribe({
      next: (res: any) => {
        Object.assign(this.form, res.data);
      },
      error: (e) => {
        this.router.navigateByUrl('/teachers');
      },
    });
  }

  saveService() {
    if (this.isNew) {
      return this.api.createTeacher(this.form);
    }

    return this.api.updateTeacher(this.form);
  }

  save() {
    this.saveService().subscribe({
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
