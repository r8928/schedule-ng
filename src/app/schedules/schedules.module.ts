import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentTitleComponent } from 'src/app/shared/component-title/component-title.component';
import { SchedulesListComponent } from './schedules-list/schedules-list.component';
import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesEditorComponent } from './schedules-editor/schedules-editor.component';

@NgModule({
  declarations: [SchedulesListComponent, SchedulesEditorComponent],
  imports: [CommonModule, SchedulesRoutingModule, ComponentTitleComponent],
})
export class SchedulesModule {}
