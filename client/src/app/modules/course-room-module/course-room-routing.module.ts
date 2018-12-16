import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { CourseRoomComponent } from './course-room.component';
import {CreateCourseRoomComponent} from './components/create-course-room/create-course-room.component';
import {CourseRoomHomeComponent} from './components/course-room-home/course-room-home.component';

const routes: Routes =
[
  {
    path: 'courseroom',
    canActivate: [AuthGuard],
    component: CourseRoomComponent,
    children: [
      {
        path: 'create/:id',
        canActivate: [AuthGuard],
        component: CreateCourseRoomComponent,
      },
      {
        path: 'room/:id',
        canActivate: [AuthGuard],
        component: CourseRoomHomeComponent,
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule {}
