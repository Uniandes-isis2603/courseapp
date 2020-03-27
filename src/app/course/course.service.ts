import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    const url = "https://gist.githubusercontent.com/josejbocanegra/9bc286433e85ad2fdd3b4d3b2a1998f8/raw/ab432ff4f10f767a8c997a8e15012cd7d908dd62/courses.json";
    return this.http.get<Course[]>(url);
  }
}
