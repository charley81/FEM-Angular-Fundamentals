import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson';
import { from } from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  lessons: Lesson[] = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];
  lessons$ = from(this.lessons);
}
