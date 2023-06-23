import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // 1. render courses in a list
  // 2. select a course
  // 3. render selected course
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'GIT Fundamentals',
      description: 'Learn the fundamentals GIT',
      percentComplete: 16,
      favorite: false,
    },
    {
      id: 3,
      title: 'Typescript Fundamentals',
      description: 'Learn the fundamentals of Typescript',
      percentComplete: 22,
      favorite: true,
    },
    {
      id: 4,
      title: 'Testing Fundamentals',
      description: 'Learn the fundamentals of Testing',
      percentComplete: 66,
      favorite: false,
    },
  ];
  selectedCourse = null;

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(id: number) {
    console.log(id);
  }
}
