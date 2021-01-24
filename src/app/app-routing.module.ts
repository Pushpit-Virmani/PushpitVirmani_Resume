import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./routes/home/home.module').then((u) => u.HomeModule),
  },
  {
    path: 'myWork',
    loadChildren: () =>
      import('./routes/my-work/my-work.module').then((u) => u.MyWorkModule),
  },
  {
    path: 'home',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
