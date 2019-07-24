import { AboutComponent } from './about/about.component';
import { StudentsService } from './students.service';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsComponent } from './students.component'
import { TableService } from './table/table.service';
import { CoursesService } from './course/courses.service';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { ChildMessageRenderer } from "./child-message-renderer.component";
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    NavbarComponent,
    TableComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentsComponent,
    AboutComponent,
    ChildMessageRenderer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([ChildMessageRenderer])
  ],
  providers: [
    CoursesService,
    TableService,
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
