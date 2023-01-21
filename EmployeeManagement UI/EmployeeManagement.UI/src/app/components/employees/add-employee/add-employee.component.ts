import { Router } from '@angular/router';
import { EmployeesService } from './../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest: Employee = {
    id:'',
    name:'',
    email: '',
    phone: '',
    salary: 0,
    department: ''
  };
  constructor(private employeeService : EmployeesService, private router : Router) { }

  ngOnInit(): void {
  } 
  addEmployee(){
    // console.log(this.addEmployeeRequest); // Verify if the form is working properly or not
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (employee) => {
        this.router.navigate(['employees']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
