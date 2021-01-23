import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import tailwindConfig from '@pv-tailwind-config';

@Component({
  selector: 'pv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  screens = tailwindConfig.theme.screens;
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(`(max-width: ${this.screens.md})`)
      .subscribe((result) => {
        if (result.matches) {
          this.isSmallScreen = true;
        }
      });
  }
}
