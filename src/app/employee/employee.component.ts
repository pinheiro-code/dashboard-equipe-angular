import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './shared/employee';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  employees: IEmployee[] = [];
  statusFilter = new FormControl('todos');
  
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((lista) => {
      this.employees = lista;
    });
  }
}
