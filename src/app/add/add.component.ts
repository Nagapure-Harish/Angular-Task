import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  close=false;

  employee: Employee = new Employee();
 
Role: number | null= null;

  Roles: any[] = [
   {id:111, roles:'Manager' },
   {id:222, roles:'Team Lead'},
   {id:555, roles:'Employee'},
   {id:333, roles:'Trainee'},
   {id:444, roles:'Intern'}
];

Emptype: number | null = null ;

EmpType : any[] = [
  {id:111, type:'Full-Time' },
  {id:222, type:'Part-Time'},
  {id:333, type:'Trainee'},
  {id:444, type:'Intern'}
];
  employees:any=[]
  

 

  constructor(
    private dialogRef: MatDialogRef<AddComponent>,
    private fb: FormBuilder, private employeeService : EmployeeService) 
    {}

  ngOnInit(): void {
    this.getEmployees();
    let token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYXJpc2hAZ21haWwuY29tIiwiaWF0IjoxNzAxMjUwODE2LCJleHAiOjE3MDEyNjg4MTZ9.3RPyrO2DLf8qpnoVUWD9doJ1iN_trpvZLvoreNqcLpDPN9GeOwwVq0lU_VarmlwvVZGew0AYe2T1oN496Xlr7g';
    localStorage.setItem('token',token);
  }
  
      public frmRegister = this.fb.group({
        mobile_no: this.fb.control('', [Validators.required, Validators.pattern(/\d{10}/)]),
        email_id:this.fb.control('',[Validators.required, Validators.email]),
        department:this.fb.control('',[Validators.required, Validators.minLength(4)]),
        role:this.fb.control(''),
        org_name:this.fb.control(''),
        emp_type:this.fb.control(''),
        bp:this.fb.control(''),
        address:this.fb.control('',[Validators.required, Validators.minLength(4)])
       });

       get Mobile():FormControl{
         return this.frmRegister.get("mobile_no")as FormControl;
       }
     
       get Deparment():FormControl{
         return this.frmRegister.get("department")as FormControl;
       }
     
       get role():FormControl{
         return this.frmRegister.get("role")as FormControl;
       }
     
       get email_id():FormControl{
         return this.frmRegister.get("email_id")as FormControl;
       }
     
       get Address():FormControl{
         return this.frmRegister.get("address")as FormControl;
       }
       
       get Emp():FormControl{
         return this.frmRegister.get("emp_type") as FormControl
       }
     
       get Organization():FormControl{
        return this.frmRegister.get("org_name") as  FormControl;
       }
  
       get BP():FormControl{
        return this.frmRegister.get("bp") as FormControl;
       }
  
  saveEmployee(){
    this.employeeService.createEmployee(this.frmRegister.value).subscribe( data =>{
      console.log(data);
      this.employee=data;
       },
       error => console.log(error));
       
  }

  onSaveClick() {
    if (this.frmRegister.valid) {
      this.dialogRef.close(this.frmRegister.value),
      this.saveEmployee(); 
      this.employeeService.getEmployeeList().subscribe(data =>{
        this.employees = data;
      });
    }
    
  }
  
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    });
  
  }
  
  

}
