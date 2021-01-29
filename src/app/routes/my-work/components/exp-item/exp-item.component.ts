import { Component, Input, OnInit } from '@angular/core';
import { WorkExpItem } from '@pv-models';

@Component({
  selector: 'pv-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.scss'],
})
export class ExpItemComponent implements OnInit {
  @Input() expItem!: WorkExpItem;

  constructor() {}

  ngOnInit(): void {}
}
