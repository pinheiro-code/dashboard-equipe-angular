import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IEmployee } from './shared/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  getEmployees(): Observable<IEmployee[]> {
    return of([
      {
        id: 'idarthur',
        name: 'Arthur',
        email: 'arthur@gmail.com',
        role: 'desenvolvedor Front-End',
        status: 'online',
        taskCount: 1,
      },
      {
        id: 'idluana',
        name: 'Luana',
        email: 'luana@gmail.com',
        role: 'desenvolvedor Back-End',
        status: 'online',
        taskCount: 2,
      },
      {
        id: 'idrafaela',
        name: 'Rafaela',
        email: 'rafaela@gmail.com',
        role: 'desenvolvedor Back-End',
        status: 'offline',
        taskCount: 3,
      },
    ]);
  }
}
