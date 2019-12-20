import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleFAQPageRoutingModule } from './single-faq-routing.module';

import { SingleFAQPage } from './single-faq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleFAQPageRoutingModule
  ],
  declarations: [SingleFAQPage]
})
export class SingleFAQPageModule {}
