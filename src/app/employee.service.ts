import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL= "http://localhost:8080/api/v1";
  
  constructor(private httpclient: HttpClient  ) { }

  getEmployeeList() : Observable<Employee[]>{
    return this.httpclient.get<Employee[]>("http://localhost:8080/api/v1/getAll");
  }

  createEmployee(employee: any): Observable<any>{
    return this.httpclient.post<any>("http://localhost:8080/api/v1/post",employee)
  }

   updateEmployees(employee:any):Observable<Employee>{
    return this.httpclient.put<any>("http://localhost:8080/api/v1/put",employee)
   }

   DeleteEmployee(id:number){
    return this.httpclient.delete<any>(`http://localhost:8080/api/v1/Delete/${id}`)
  }

  // getOrgNameData():Observable<string[]>{
  //   return this.httpclient.get<string[]>("http://localhost:8080/org/getAllOrganizations");
  // }

  // getBPlaceData():Observable<string[]>{
  //   return this.httpclient.get<string[]>("http://localhost:8080/businessplaces/findAll");
  // }

}
