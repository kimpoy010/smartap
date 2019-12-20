import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApmodePage } from './apmode.page';

const routes: Routes = [
  {
    path: '',
    component: ApmodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApmodePageRoutingModule {}
