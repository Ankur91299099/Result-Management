import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private ROOT_URL = "http://localhost:3001/results";
  rollno:any;
  dateofbirth:any;
  
  // Http Options
  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
       
  };
  constructor(private http: HttpClient) { }

  getResults(): Observable<Result[]> {
    return this.http.get<Result[]>(this.ROOT_URL);
  }

  findResult(roll_no: any, date_of_birth:any) {
    return this.http.get<Result>(`${this.ROOT_URL}/find?roll_no=${roll_no}&date_of_birth=${date_of_birth}`, this.httpOptions);
  }
  
  getResult(roll_no: number) {
    return this.http.get<Result>(`${this.ROOT_URL}/get?roll_no=${roll_no}`, this.httpOptions);
  }

  addResult(result: Result) {
    return this.http.post<Result>(this.ROOT_URL+"/add", result, this.httpOptions);
  }

  editResult(result:Result, roll_no: number) {
    return this.http.post<Result> (
      `${this.ROOT_URL}/edit?roll_no=${roll_no}`,
      result,
      this.httpOptions
    );
  }

  deleteResult(roll_no: number) {
    return this.http.delete(`${this.ROOT_URL}/delete?roll_no=${roll_no}`, 
    this.httpOptions);
  }
  getRoll(rollno:any){

    this.rollno=rollno;

  }

  getDate(dateofbirth:any){

    this.dateofbirth=dateofbirth;  

  }

  setRoll(){

    return this.rollno;

  }

  setDate(){

    return this.dateofbirth;

  }
}
