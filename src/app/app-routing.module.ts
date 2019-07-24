import { AboutComponent } from './about/about.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {path: 'About', component: AboutComponent},
  {path: 'Courses', component: CoursesComponent},
  {path: 'Students', component: StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
