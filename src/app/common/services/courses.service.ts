import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

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

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
