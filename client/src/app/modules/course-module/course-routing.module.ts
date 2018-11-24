import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { CourseComponent } from './course.component'
import { CourseRoomHeaderComponent } from './components/course-room-header/course-room-header.component';

const routes: Routes = 
[
  {
    path: 'course/:id',
    canActivate: [AuthGuard],
    component: CourseComponent,
    children:
    [
      {
        path: 'room',
        canActivate: [AuthGuard],
        component: CourseRoomHeaderComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule {}