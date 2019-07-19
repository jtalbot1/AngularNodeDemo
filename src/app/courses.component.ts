import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CoursesService } from './course/courses.service';
// 1. Create a component
@Component({
    selector: 'courses',
    template: `
    <h2>{{title}}</h2>
    <table style="width:100%">
    <tr>
      <th *ngFor="let course of courses">{{
          course
      }}</th>
    </tr>
    <tr>
      <td *ngFor="let course of courses"></td>
    </tr>
  </table>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService){ // < dependency injection
        this.courses = service.getCourses();
    }
}