import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ICourse } from './course';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CoursesService {
 
    private _courseUrl: string = "http://localhost:3000/v1/courses";

    constructor(private http:HttpClient) {}
    
    // API calls - GET PUT POST
    getCourses() : Observable<ICourse[]>{ 
        return this.http.get<ICourse[]>(this._courseUrl).catch(this.errorHandler);
    }

    getCourse(id: number): Observable<ICourse> {
        return this.http.get<ICourse>(this._courseUrl + '/' + id).catch(this.errorHandler);
    } 

    insertCourse(course: ICourse): Observable<ICourse> {
        return this.http.post<ICourse>(this._courseUrl, course)
    }

    updateCourse(course: ICourse): Observable<void> {
        return this.http.put<void>(
        this._courseUrl + course.id,
        course
        )
    }

    deleteCourse(id: number) {
        return this.http.delete(this._courseUrl + id)
    }

    getCols(){
        return [
                {headerName: 'Id', field: 'id' , width: 50, sortable: true, filter: true},
                {headerName: 'Name', field: 'name' , width: 370, sortable: true, filter: true},
                {headerName: 'Code', field: 'code', width: 140, filter: true},
                {headerName: 'Credit', field: 'credit', width: 100, filter: true}];
    }

    errorHandler(error: HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
      }
}