import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersEditorComponent } from 'src/app/teachers/teachers-editor/teachers-editor.component';
import { TeachersListComponent } from 'src/app/teachers/teachers-list/teachers-list.component';

const routes: Routes = [
  { path: '', component: TeachersListComponent },
  { path: 'new', component: TeachersEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
