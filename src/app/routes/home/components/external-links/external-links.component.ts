import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { environment } from '@pv-env';

@Component({
  selector: 'pv-external-links',
  templateUrl: './external-links.component.html',
  styleUrls: ['./external-links.component.scss'],
})
export class ExternalLinksComponent implements OnInit {
  faLinkedin = faLinkedin;
  linkedInUrl = environment.linkedInUrl;

  constructor() {}

  ngOnInit(): void {}
}
