import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesEditorComponent } from './schedules-editor.component';

describe('SchedulesEditorComponent', () => {
  let component: SchedulesEditorComponent;
  let fixture: ComponentFixture<SchedulesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulesEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
