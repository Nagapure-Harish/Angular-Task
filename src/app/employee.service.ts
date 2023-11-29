import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL= "http://localhost:8383/api/v1";
  
  constructor(private httpclient: HttpClient  ) { }

  getEmployeeList() : Observable<Employee[]>{
    let token=localStorage.getItem('token');
    const httpOption={
      headers:new HttpHeaders({
        'Authorization':'Bearer '+token
    })
  }
    return this.httpclient.get<Employee[]>("http://localhost:8383/api/v1/getAll",httpOption);
  }

  createEmployee(employee: any): Observable<any>{
    let token=localStorage.getItem('token');
    const httpOption={
      headers:new HttpHeaders({
        'Authorization':'Bearer '+token
    })
  }
    return this.httpclient.post<any>("http://localhost:8383/api/v1/post",employee,httpOption)
  }

   updateEmployees(employee:any):Observable<Employee>{
    let token=localStorage.getItem('token');
    const httpOption={
      headers:new HttpHeaders({
        'Authorization':'Bearer '+token
    })
  }
    return this.httpclient.put<any>("http://localhost:8383/api/v1/put",employee,httpOption)
   }

   DeleteEmployee(id:number){
    let token=localStorage.getItem('token');
    const httpOption={
      headers:new HttpHeaders({
        'Authorization':'Bearer '+token
    })
  }
    return this.httpclient.delete<any>(`http://localhost:8383/api/v1/Delete/${id}`,httpOption)
  }

 

}
