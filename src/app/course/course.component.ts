import { Component, OnInit } from '@angular/core';

import { Course } from './course';
import { dataCourses } from './dataCourses';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }
  private coursesA: Array<Course> = dataCourses;
  get courses(): Array<Course> {return this.coursesA;}


  ngOnInit() {
  }

}
