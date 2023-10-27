import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { validateVerticalPosition } from '@angular/cdk/overlay';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  close=false;

  Org_name: string | null = null;

  orgname: any[]=[];

  B_Place: string | null= null;

  bplace: any[]=[];

Oname: any;

Bplace: any;

  
  employee: Employee = new Employee();
 
Role: number | null= null;

  Roles: any[] = [
   {id:111, roles:'Manager' },
   {id:222, roles:'Team Lead'},
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

 

  constructor(
    private dialogRef: MatDialogRef<AddComponent>,
    private fb: FormBuilder, private employeeService : EmployeeService) 
    {}
      public frmRegister = this.fb.group({
        Mobile: this.fb.control('', [Validators.required, Validators.pattern(/\+91\d{10}/)]),
        email_id:this.fb.control('',[Validators.required, Validators.email]),
        Deparment:this.fb.control('',[Validators.required, Validators.minLength(4)]),
        role:this.fb.control(''),
        Organization:this.fb.control(''),
        Emp:this.fb.control(''),
        BP:this.fb.control(''),
        Address:this.fb.control('',[Validators.required, Validators.minLength(4)])
       });
      
       get Mobile():FormControl{
         return this.frmRegister.get("Mobile")as FormControl;
       }
     
       get Deparment():FormControl{
         return this.frmRegister.get("Deparment")as FormControl;
       }
     
       get role():FormControl{
         return this.frmRegister.get("role")as FormControl;
       }
     
       get email_id():FormControl{
         return this.frmRegister.get("email_id")as FormControl;
       }
     
       get Address():FormControl{
         return this.frmRegister.get("Address")as FormControl;
       }
       
       get Emp():FormControl{
         return this.frmRegister.get("Emp") as FormControl
       }
     
       get Organization():FormControl{
        return this.frmRegister.get("Organization") as  FormControl;
       }
  
       get BP():FormControl{
        return this.frmRegister.get("BP") as FormControl;
       }

  ngOnInit() {
    this.saveEmployee();

    // this.employeeService.getOrgNameData().subscribe(data =>{
    //  this.orgname = data;
    // });


    // this.employeeService.getBPlaceData().subscribe(data=>{
    //   this.bplace = data;
    // })
  }
  // get email(){
  //   return this.employeeForm.get("email_id");
  // }

  onSaveClick() {
    if (this.frmRegister.valid) {
      this.dialogRef.close(this.frmRegister.value),
      this.saveEmployee();
    }
  }

  // onCancelClick(): void {
  //   this.dialogRef.close();
  // }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
       },
       error => console.log(error));
  }
   

   
  onsubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

  
}
