import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultService } from '../service/result.service';

@Component({
  selector: 'app-edit-result',
  templateUrl: './edit-result.component.html',
  styleUrls: ['./edit-result.component.css']
})
export class EditResultComponent implements OnInit {

  form: FormGroup;
  roll_no: number;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private resultService: ResultService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      roll_no: '',
      name: '',
      date_of_birth:'',
      score:''
    })

    this.roll_no = this.route.snapshot.params['roll_no'];

    this.resultService.getResult(this.roll_no).subscribe(
      result => this.form.patchValue(result)
    )
   }

  ngOnInit(): void {
  }

  editResult(): void {
    this.resultService.editResult(this.form.value, this.roll_no).subscribe(
      () => {
        this.router.navigate(['/results/all-results'])
      }
    )
  }
}
