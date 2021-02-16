import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './components/education/education.component';
import { EducationItemComponent } from './components/education-item/education-item.component';


@NgModule({
  declarations: [EducationComponent, EducationItemComponent],
  imports: [
    CommonModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
