import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApmodePageRoutingModule } from './apmode-routing.module';

import { ApmodePage } from './apmode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApmodePageRoutingModule
  ],
  declarations: [ApmodePage]
})
export class ApmodePageModule {}
