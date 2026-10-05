import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './shared/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  employees: IEmployee[] = [];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((lista) => {
      this.employees = lista;
    });
  }
}
