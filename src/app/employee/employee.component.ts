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
  allEmployees: IEmployee[] = [];
  statusFilter = new FormControl('todos');

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((lista) => {
      this.allEmployees = lista;
      this.employees = lista;
    });
    this.statusFilter.valueChanges.subscribe((valor) => {
      if (valor === 'todos') {
        this.employees = this.allEmployees;
      } else {
        this.employees = this.allEmployees.filter((employee) => employee.status === valor);
      }
    });
  }
}
