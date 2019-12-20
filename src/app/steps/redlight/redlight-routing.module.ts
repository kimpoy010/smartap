import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedlightPage } from './redlight.page';

const routes: Routes = [
  {
    path: '',
    component: RedlightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedlightPageRoutingModule {}
