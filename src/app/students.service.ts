import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IStudent } from './student';
import { ICourse } from './course/course';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class StudentsService {
  
  private _studentUrl: string = "http://localhost:3000/v1/students";
  
  constructor(private http: HttpClient) { }
  
  getStudent(id: number): Observable<IStudent> {
    return this.http.get<IStudent>(this._studentUrl + '/' + id).catch(this.errorHandler);
} 

  getStudents(): Observable<IStudent[]>{ // observables are used for http responses and are used in conjunction with service subscriptions
    return this.http.get<IStudent[]>(this._studentUrl).catch(this.errorHandler);
  }
  getCoursesStudents(courseId: number): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this._studentUrl + "?" + "course_id=" + courseId).catch(this.errorHandler);
  }
  
  getStudentCourses(studentId: number): Observable<ICourse[]>{
    return this.http.get<ICourse[]>(this._studentUrl + "/" + studentId + "/courses").catch(this.errorHandler);
  }

  getCols(){
    return [
            {headerName: 'Id', field: 'id' , width: 50, sortable: true, filter: true},
            {headerName: 'First Name', field: 'first_name' , width: 250, sortable: true, filter: true},
            {headerName: 'Last Name', field: 'last_name', width: 250, filter: true},
            {headerName: 'Department', field: 'department_code', width: 200, filter: true},
            {headerName: 'Date of Birth', field: 'dob', width: 150, filter: true},
            {headerName: 'Gender', field: 'gender', width: 150, filter: true}
        ];
}

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
