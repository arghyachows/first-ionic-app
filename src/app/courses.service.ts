import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Course } from './types';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private _http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this._http.get<Course[]>(environment.apiUrl + "/courses");
  }

  getCourse() {

  }


}

