import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWorkRoutingModule } from './my-work-routing.module';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { WorkExpService } from '@pv-api';

@NgModule({
  declarations: [MyWorkComponent],
  imports: [CommonModule, MyWorkRoutingModule],
  providers: [WorkExpService],
})
export class MyWorkModule {}
