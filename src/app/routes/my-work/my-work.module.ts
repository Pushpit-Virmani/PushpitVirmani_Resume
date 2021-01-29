import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWorkRoutingModule } from './my-work-routing.module';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { ExpItemComponent } from './components/exp-item/exp-item.component';
import { WorkExpService } from '@pv-api';
import { HyperlinkModule } from '@pv-modules';

@NgModule({
  declarations: [MyWorkComponent, ExpItemComponent],
  imports: [CommonModule, MyWorkRoutingModule, HyperlinkModule],
  providers: [WorkExpService],
})
export class MyWorkModule {}
