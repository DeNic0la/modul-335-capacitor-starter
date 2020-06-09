import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceinfoPageRoutingModule } from './deviceinfo-routing.module';

import { DeviceinfoPage } from './deviceinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceinfoPageRoutingModule
  ],
  declarations: [DeviceinfoPage]
})
export class DeviceinfoPageModule {}
