import { CoursesService } from './courses.service';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public errorMsg;
  public course;
  @Input() public courseId;
 
  constructor( private _coursesService: CoursesService){ // < dependency injection
  }

  ngOnInit() {
    this.getCourse(this.courseId);
  }
 getCourse(id: number) {
   this._coursesService.getCourse(id)
   .subscribe(data => this.course = data,
              error => this.errorMsg = error);
 }
}
