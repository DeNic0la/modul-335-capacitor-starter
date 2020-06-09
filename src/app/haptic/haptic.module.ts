import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HapticPageRoutingModule } from './haptic-routing.module';

import { HapticPage } from './haptic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HapticPageRoutingModule
  ],
  declarations: [HapticPage]
})
export class HapticPageModule {}
