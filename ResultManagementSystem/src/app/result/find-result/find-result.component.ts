import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Result } from '../model/result';
import { ResultService } from '../service/result.service';

@Component({
  selector: 'app-find-result',
  templateUrl: './find-result.component.html',
  styleUrls: ['./find-result.component.css']
})
export class FindResultComponent implements OnInit {


  result$!: Observable<Result>;
  resultForm = new FormGroup({
    roll_no: new FormControl("", [Validators.required]),
    date_of_birth: new FormControl("", [Validators.required]),
  });

  constructor(private resultService: ResultService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  findResult() {
    if (this.resultForm.valid) {

      this.resultService.getRoll(this.resultForm.value.roll_no);

      this.resultService.getDate(this.resultForm.value.date_of_birth);

      this.result$ = this.resultService.findResult(this.resultForm.value.roll_no, this.resultForm.value.date_of_birth);




      this.result$.forEach(value => {

        if (value != null) {

          this.router.navigate(["/results/display-result/" + this.resultForm.value.date_of_birth + "/" + this.resultForm.value.roll_no]);

        }

        else {

          alert("Rollno or DateOfBirth is not valid.Please check once");

        }

      });

    }
  }
}
