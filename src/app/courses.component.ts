import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CoursesService } from './course/courses.service';
import { StudentsService } from './students.service';
import { ChildMessageRenderer } from "./child-message-renderer.component";


@Component({
    selector: 'courses',
    templateUrl: 'courses.component.html'
})

export class CoursesComponent{
    courseId = 1;
    title = "List of courses";
    errorMsg;
    courses;
    selectedCourse;
    registeredStudents;
    columnDefs;

    private gridApi;
    private gridColumnApi;
    private context;
    private frameworkComponents;
  
    registeredStudentsHeader = [
      {headerName: 'Id', field: 'id' , width: 50, sortable: true, filter: true},
      {headerName: 'First Name', field: 'first_name' , width: 250, sortable: true, filter: true},
      {headerName: 'Last Name', field: 'last_name', width: 250, filter: true},
      {headerName: 'Department', field: 'department_code', width: 200, filter: true},
      {headerName: 'Date of Birth', field: 'dob', width: 150, filter: true},
      {headerName: 'Gender', field: 'gender', width: 150, filter: true}
  ];

    constructor( private _coursesService: CoursesService, private _studentsService: StudentsService){ // < dependency injection
      this.context = { componentParent: this };
      this.frameworkComponents = {
        childMessageRenderer: ChildMessageRenderer
      };
    }

    ngOnInit() {
      this.getCourses();
      this.getTableCols();
      this.getCourse(this.courseId);
      this.getCourseStudents(this.courseId);
    }

    getCourse(id: number) {
      this._coursesService.getCourse(id)
      .subscribe(data => this.selectedCourse = data,
                 error => this.errorMsg = error);
    }

   getCourses() {
    this._coursesService.getCourses()
    .subscribe(data => this.courses = data,
               error => this.errorMsg = error);
   }

   getTableCols(){
    this.columnDefs = this._coursesService.getCols();
   }

   onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  selectCourse(row){
    this.courseId = row.rowIndex + 1;
    this.getCourse(this.courseId);
    this.getCourseStudents(this.courseId);
  }
  getCourseStudents(courseId: number){
    this._studentsService.getCoursesStudents(courseId)
    .subscribe(data => this.registeredStudents = data,
                error => this.errorMsg = error);
                console.log(this.registeredStudents);
  }
  // methodFromParent(rowIndex) {
  //   this.courseId = rowIndex + 1;
  //   this.getCourse(this.courseId);
  // }
}
