import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifierPageRoutingModule } from './notifier-routing.module';

import { NotifierPage } from './notifier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifierPageRoutingModule
  ],
  declarations: [NotifierPage]
})
export class NotifierPageModule {}
