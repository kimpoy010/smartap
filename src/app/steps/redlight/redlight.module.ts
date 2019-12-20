import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedlightPageRoutingModule } from './redlight-routing.module';

import { RedlightPage } from './redlight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedlightPageRoutingModule
  ],
  declarations: [RedlightPage]
})
export class RedlightPageModule {}
