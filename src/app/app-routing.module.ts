import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'teachers',
    loadChildren: () =>
      import('./teachers/teachers.module').then((m) => m.TeachersModule),
  },

  {
    path: 'schedules',
    loadChildren: () =>
      import('./schedules/schedules.module').then((m) => m.SchedulesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
