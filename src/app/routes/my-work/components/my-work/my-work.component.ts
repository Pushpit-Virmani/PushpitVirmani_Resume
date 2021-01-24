import { Component, OnInit } from '@angular/core';
import { WorkExpService } from '@pv-api';
import { APIResponse, WorkExpItem } from '@pv-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'pv-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent implements OnInit {
  workExp$?: Observable<APIResponse<WorkExpItem[]>>;

  constructor(private workExpApi: WorkExpService) {}

  ngOnInit(): void {
    this.workExp$ = this.workExpApi.getWorkExp();
  }
}
