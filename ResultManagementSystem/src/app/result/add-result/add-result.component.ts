import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultService } from '../service/result.service';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {
  msg:string="";
  valid_add=true;
  already:any;
  resultForm:any= new FormGroup({
    roll_no: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    date_of_birth: new FormControl("", [Validators.required]),
    score: new FormControl("", [Validators.required])   
  });

  constructor(private resultService: ResultService, private router: Router) { }

  ngOnInit(): void {
  }

  newResult() {
    this.resultService.getResult(this.resultForm.value.roll_no).subscribe(res=>{
      if(res==null){
      this.already=false;
      this.valid_add=true;
    }else{
      this.already=true;
      this.msg="Roll No already exist, try editing option";
      alert(this.msg);
      this.valid_add=false;
      console.log(this.valid_add);
    }
      console.log(this.already);
    })
    if(!this.resultForm.valid){
      this.msg="Please Enter all the Fields";
    }
    if (this.resultForm.valid && this.valid_add) {
      this.resultService.addResult(this.resultForm.value).subscribe(res => {
        this.resultForm.reset();
        this.router.navigate(["/results/all-results"]);
      });
    }
  }
}