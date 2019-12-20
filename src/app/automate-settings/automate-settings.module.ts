import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomateSettingsPageRoutingModule } from './automate-settings-routing.module';

import { AutomateSettingsPage } from './automate-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutomateSettingsPageRoutingModule
  ],
  declarations: [AutomateSettingsPage]
})
export class AutomateSettingsPageModule {}
