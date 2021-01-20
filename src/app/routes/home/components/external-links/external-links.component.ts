import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'pv-external-links',
  templateUrl: './external-links.component.html',
  styleUrls: ['./external-links.component.scss'],
})
export class ExternalLinksComponent implements OnInit {
  faLinkedin = faLinkedin;

  constructor() {}

  ngOnInit(): void {}
}
