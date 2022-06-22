import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './modules/employees/employee-list/employee-list.component';
import { EmployeeComponent } from './modules/employees/employee/employee.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'modules/employees/employee-list',
    component:EmployeeListComponent
  },
  {
    path:'modules/employees/employee',
    component:EmployeeComponent
  }
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  