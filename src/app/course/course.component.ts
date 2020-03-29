import { Component, OnInit } from '@angular/core';

import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }
  private courses: Array<Course>;

  getCourseList() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  ngOnInit() {
    this.getCourseList();
  }
}
