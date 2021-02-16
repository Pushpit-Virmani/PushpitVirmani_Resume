import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIResponse } from '../models/api.model';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root',
})
export class EducationApiService {
  constructor(private http: HttpClient) {}

  getEducationDetails(): Observable<APIResponse<Education[]>> {
    return this.http.get<Education[]>('assets/data/education.json').pipe(
      map((data) => ({ data })),
      catchError((error) => of({ data: [], error }))
    );
  }
}
