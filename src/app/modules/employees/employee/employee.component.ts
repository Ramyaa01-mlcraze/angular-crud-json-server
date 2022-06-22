import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/service/employee/employee.service';
import { Configuration, Employee } from 'src/app/model/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public showmode : string;
  public ObjConfiguration: Configuration;

  constructor(
    private employeeService: EmployeeService,
    private toastrService: ToastrService
  ) { 
    this.showmode = 'Register';
    this.ObjConfiguration = new Configuration();  
  }

  ngOnInit() {
    this.employeeService.getConfig().subscribe(data => this.ObjConfiguration = data);
  }

  createOrUpdateEmployee(currentEmployee: Employee) {
    if (currentEmployee.id === null) {
      this.createEmployee(currentEmployee);
    } else {
      this.updateEmployee(currentEmployee);
    }
  }

  createEmployee(emp: Employee) {
    this.employeeService.createEmployee(emp).subscribe(
      (result: Employee) => {
        this.employeeService.getAllEmployee();
        this.toastrService.success('Employee created successfully !', 'Employee CRUD');
        this.clearEmployee();
      });
  }

  updateEmployee(emp: Employee) {
    this.employeeService.updateEmployee(emp).subscribe(
      (result: Employee) => {
        this.employeeService.getAllEmployee();
        this.toastrService.info('Employee updated successfully !', 'Employee CRUD');
        this.clearEmployee();
      });
  }

  clearEmployee() {
    this.employeeService.currentEmployee = {
      id: null,
      firstName: '',
      lastName: '',
      designation: '',
      contact: null,
      address: ''
    };
  }
}
