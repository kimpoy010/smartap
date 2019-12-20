import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedModalPageRoutingModule } from './sched-modal-routing.module';

import { SchedModalPage } from './sched-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedModalPageRoutingModule
  ],
  declarations: [SchedModalPage]
})
export class SchedModalPageModule {}
