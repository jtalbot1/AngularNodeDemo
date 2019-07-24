import { StudentsService } from './../students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  public students = [];
  public errorMsg;
  
  constructor(private _studentService: StudentsService) { }

  ngOnInit() {
    this._studentService.getStudents()
    .subscribe(data => this.students = data,
               error => this.errorMsg = error);
  }

}
