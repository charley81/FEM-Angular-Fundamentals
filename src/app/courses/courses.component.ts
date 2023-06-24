import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

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
  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService
      .all()
      .subscribe((result: any) => (this.courses = result));
  }

  selectCourse(course) {
    this.selectedCourse = { ...course };
    this.originalTitle = course.title;
  }

  deleteCourse(id: number) {
    console.log(id);
  }

  saveCourse(course: Course) {
    console.log(course);
  }

  reset() {
    this.selectedCourse = { ...emptyCourse };
  }
}
