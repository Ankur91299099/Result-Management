import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../model/result';
import { ResultService } from '../service/result.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {

  result$!: Observable<Result> ;
  roll:any;
  dob:any;
  

  constructor(
    private resultService: ResultService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    
    this.roll=this.resultService.setRoll();

    this.dob=this.resultService.setDate();

    this.result$ = this.resultService.findResult(this.roll,this.dob);
    

    
  }
}
