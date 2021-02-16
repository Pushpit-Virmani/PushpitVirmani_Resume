import { Component, OnInit } from '@angular/core';
import { APIResponse, Education } from '@pv-models';
import { Observable } from 'rxjs';
import { EducationApiService } from 'src/app/api/education-api.service';

@Component({
  selector: 'pv-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  education$?: Observable<APIResponse<Education[]>>;

  constructor(private educationApi: EducationApiService) {}

  ngOnInit(): void {
    this.education$ = this.educationApi.getEducationDetails();
  }
}
