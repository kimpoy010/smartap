import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomateSettingsPage } from './automate-settings.page';

const routes: Routes = [
  {
    path: '',
    component: AutomateSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomateSettingsPageRoutingModule {}
