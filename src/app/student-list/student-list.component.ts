import { StudentsService } from './../students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students = [];
  public errorMsg;
  public columnDefs = [];
  constructor(private _studentService: StudentsService) { }

  ngOnInit() {
    this.getTableCols();
    this._studentService.getStudents()
    .subscribe(data => this.students = data,
               error => this.errorMsg = error);
  }

  getTableCols(){
    this.columnDefs = this._studentService.getCols();
   }   
}
