import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';
import { Observable } from 'rxjs';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [];
  courses$: any;
  currentCourse = emptyCourse;
  originalTitle = '';

  constructor(private coursesService: CoursesService) {
    this.fetchCourses();
  }

  ngOnInit(): void {}

  fetchCourses() {
    this.courses$ = this.coursesService.all();
    // this.coursesService
    //   .all()
    //   .subscribe((result: any) => (this.courses = result));
  }

  selectCourse(course) {
    this.currentCourse = course;
  }

  deleteCourse(id: string) {
    this.coursesService.delete(id).subscribe((result) => this.fetchCourses());
  }

  saveCourse(course: Course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
    this.reset();
  }

  createCourse(course: Course) {
    this.coursesService
      .create(course)
      .subscribe((result) => this.fetchCourses());
  }

  updateCourse(course: Course) {
    this.coursesService
      .update(course)
      .subscribe((result) => this.fetchCourses());
  }

  reset() {
    console.log('reset');
    this.currentCourse = { ...emptyCourse };
  }
}
