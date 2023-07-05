import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private ROOT_URL = "http://localhost:3001";

  // Http Options
  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")

  };
  
  constructor(private http: HttpClient) { }

  findTeacher(username:string, password:string) {
    return this.http.get<number>(`${this.ROOT_URL}/login-teacher?username=${username}&password=${password}`, this.httpOptions);
  }

  findStudent(username:string, password:string) {
    return this.http.get<number>(`${this.ROOT_URL}/login-student?username=${username}&password=${password}`, this.httpOptions);
  }
}
