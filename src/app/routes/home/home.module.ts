import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HyperlinkModule } from '@pv-modules';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ExternalLinksComponent } from './components/external-links/external-links.component';

@NgModule({
  declarations: [HomeComponent, ExternalLinksComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    MatButtonModule,
    HyperlinkModule,
  ],
})
export class HomeModule {}
