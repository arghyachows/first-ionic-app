import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../types';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  courseList: Observable<Course[]>;
  constructor(private courseService: CoursesService) {
    this.courseList = courseService.getAllCourses();
  }

}
