import { Component, Input, OnInit } from '@angular/core';
import { Education } from '@pv-models';

@Component({
  selector: 'pv-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss'],
})
export class EducationItemComponent implements OnInit {
  @Input() educationItem!: Education;

  constructor() {}

  ngOnInit(): void {}
}
