import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { DiscoverCoursesComponent } from './components/discover-courses/discover-courses.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes =
[
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomepageComponent,
  },
  {
    path: 'discover',
    canActivate: [AuthGuard],
    component: DiscoverCoursesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
