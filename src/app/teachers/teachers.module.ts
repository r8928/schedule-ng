import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersEditorComponent } from './teachers-editor/teachers-editor.component';
import { ComponentTitleComponent } from 'src/app/shared/component-title/component-title.component';

@NgModule({
  declarations: [TeachersListComponent, TeachersEditorComponent],
  imports: [CommonModule, TeachersRoutingModule, ComponentTitleComponent],
})
export class TeachersModule {}
