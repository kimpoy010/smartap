import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionModalPageRoutingModule } from './condition-modal-routing.module';

import { ConditionModalPage } from './condition-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionModalPageRoutingModule
  ],
  declarations: [ConditionModalPage]
})
export class ConditionModalPageModule {}
