import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulesEditorComponent } from 'src/app/schedules/schedules-editor/schedules-editor.component';
import { SchedulesListComponent } from './schedules-list/schedules-list.component';

const routes: Routes = [
  { path: '', component: SchedulesListComponent },
  { path: 'new', component: SchedulesEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulesRoutingModule {}
