import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import tailwindConfig from '@pv-tailwind-config';

@Component({
  selector: 'pv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  screens = tailwindConfig.theme.screens;
  showImage = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(`(min-width: ${this.screens.md})`)
      .subscribe((result) => {
        if (result.matches) {
          this.showImage = true;
        } else {
          this.showImage = false;
        }
      });
  }
}
