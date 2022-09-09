import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersEditorComponent } from './teachers-editor.component';

describe('TeachersEditorComponent', () => {
  let component: TeachersEditorComponent;
  let fixture: ComponentFixture<TeachersEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
