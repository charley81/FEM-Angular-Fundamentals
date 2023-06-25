import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) {}

  // get all courses
  all() {
    return this.http.get(this.getUrl());
  }

  // get single course
  find(id: string) {
    return this.http.get(this.getUrlWithId(id));
  }

  // create course
  create(course: Course) {
    return this.http.post(this.getUrl(), course);
  }

  // update course
  update(course: Course) {
    return this.http.put(this.getUrlWithId(course.id), course);
  }

  // delete course
  delete(id: string) {
    return this.http.delete(this.getUrlWithId(id));
  }

  getUrl(): string {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlWithId(id: string): string {
    return `${this.getUrl()}/${id}`;
  }
}
