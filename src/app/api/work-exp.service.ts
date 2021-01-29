import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { APIResponse, WorkExpItem } from '@pv-models';

@Injectable()
export class WorkExpService {
  constructor(private http: HttpClient) {}

  getWorkExp(): Observable<APIResponse<WorkExpItem[]>> {
    return this.http.get<WorkExpItem[]>('assets/data/work-exp.json').pipe(
      map((data) => ({ data })),
      catchError((error) => of({ data: [], error }))
    );
  }
}
