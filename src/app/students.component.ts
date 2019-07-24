import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CoursesService } from './course/courses.service';
import { StudentsService } from './students.service';
import { ChildMessageRenderer } from "./child-message-renderer.component";


@Component({
    selector: 'students',
    templateUrl: 'students.component.html',
    styleUrls: ['students.component.css']
})

export class StudentsComponent{
    studentId = 1; // set default
    title = "List of students";
    errorMsg;
    students;
    selectedStudent;
    studentCourses;
    columnDefs;

    private gridApi;
    private gridColumnApi;
    private context;
    private frameworkComponents;

    constructor(private _studentsService: StudentsService){ // < dependency injection
      this.context = { componentParent: this };
      this.frameworkComponents = {
        childMessageRenderer: ChildMessageRenderer
      };
    }

    ngOnInit() {
        this.getTableCols();
        this._studentsService.getStudents()
        .subscribe(data => this.students = data,
                   error => this.errorMsg = error);
    }

   getTableCols(){
    this.columnDefs = this._studentsService.getCols();
   }

   onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  selectStudent(row){
    this.studentId = row.rowIndex + 1;
    this.getStudentCourses(this.studentId);
    this.getStudentDetail(this.studentId);
  }
  getStudentCourses(studentId: number){
    this._studentsService.getStudentCourses(studentId)
    .subscribe(data => this.studentCourses = data,
                error => this.errorMsg = error);
                console.log(this.studentCourses);
  }
  getStudentDetail(studentId: number){
    this._studentsService.getStudent(studentId)
    .subscribe(data => this.selectedStudent = data,
                error => this.errorMsg = error);
  }
}
