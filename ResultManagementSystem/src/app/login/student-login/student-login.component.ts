import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  msg = "";

  loginForm:any = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }

  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  loginStudent() {
    if (this.loginForm.valid) {
      this.loginService.findStudent(this.loginForm.value.username, this.loginForm.value.password).subscribe(res => {
        this.loginForm.reset();
        if(res != 0) {
          this.router.navigate(["/results/find-result"]);
        }
        else {
          this.msg = "invalid username or password"          
          this.ngOnInit
        }
      });
    }
  }

}
