import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  
})
export class EmployeeListComponent  implements OnInit {
 
  employees :any=[];

  
  
  employee: Employee = new Employee();

  constructor(private dialog: MatDialog , private employeeService:EmployeeService) { }

openAddEmployeeDialog(): void {
  const dialogRef = this.dialog.open(AddComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.employees.push(result);
    }
  });
}


  ngOnInit(): void {
   this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    });
  
  }


  

 
  
}


