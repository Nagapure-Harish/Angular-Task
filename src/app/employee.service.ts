import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private httpclient: HttpClient  ) { }

  getEmployeeList() : Observable<Employee[]>{
    return this.httpclient.get<Employee[]>("http://localhost:8080/api/v1/getAll");
  }

  createEmployee(employee: any): Observable<any>{
    return this.httpclient.post<any>("http://localhost:8080/api/v1/post",employee)
  }

  // getEmployeeById(id :number):Observable<Employee>{
  //    return this.httpclient.get<Employee>("http://localhost:8080/api/v1/get/{emp_id}");
  // }

   updateEmployees(employee:any):Observable<Employee>{
    return this.httpclient.put<any>("http://localhost:8080/api/v1/put",employee)
   }

  // getOrgNameData():Observable<string[]>{
  //   return this.httpclient.get<string[]>("http://localhost:8080/api/data/Org_name");
  // }

  // getBPlaceData():Observable<string[]>{
  //   return this.httpclient.get<string[]>("http://localhost:8080/api/data/B_Place");
  // }
}
