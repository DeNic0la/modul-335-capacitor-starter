import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceinfoPage } from './deviceinfo.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceinfoPageRoutingModule {}
