import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../model/result';
import { ResultService } from '../service/result.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.css']
})
export class AllResultsComponent implements OnInit {

  results$!: Observable<Result[]> ;
  roll_no!: number ;
  
  constructor(
    private resultService: ResultService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.results$ = this.resultService.getResults();
  }

  removeResult(result:Result) {    

    this.resultService.deleteResult(result.roll_no).subscribe(res => {
      this.ngOnInit();
  });
  }
}
