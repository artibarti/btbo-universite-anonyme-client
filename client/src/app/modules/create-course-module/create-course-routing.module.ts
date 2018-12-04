import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { CreateCourseComponent } from './create-course.component'

const routes: Routes = 
[
  {
    path: 'create/course',
    canActivate: [AuthGuard],
    component: CreateCourseComponent,
    children:
    []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCourseRoutingModule {}
