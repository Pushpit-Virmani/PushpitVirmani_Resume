import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pv-sidenav-links',
  templateUrl: './sidenav-links.component.html',
  styleUrls: ['./sidenav-links.component.scss'],
})
export class SidenavLinksComponent implements OnInit {
  @Input() shouldDisplayLabels!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
