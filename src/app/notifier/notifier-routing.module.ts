import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifierPage } from './notifier.page';

const routes: Routes = [
  {
    path: '',
    component: NotifierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifierPageRoutingModule {}
