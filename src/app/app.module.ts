import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmployeesModule } from './modules/employees/employees.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './modules/employees/employee-list/employee-list.component';
import {RouterModule} from '@angular/router';
import { EmployeeComponent } from './modules/employees/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot([
      {
         path: 'home',
         component: HomeComponent},

         {path: 'modules/employees/employee-list',
         component: EmployeeListComponent

      },
      {
        path:'modules/employees/employee',
        component:EmployeeComponent
      }
   ]),
    EmployeesModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
