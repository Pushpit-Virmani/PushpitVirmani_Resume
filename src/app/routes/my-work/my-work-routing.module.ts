import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyWorkComponent } from './components/my-work/my-work.component';

const routes: Routes = [
  {
    path: '',
    component: MyWorkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyWorkRoutingModule {}
