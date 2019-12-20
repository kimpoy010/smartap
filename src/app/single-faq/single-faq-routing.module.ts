import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleFAQPage } from './single-faq.page';

const routes: Routes = [
  {
    path: '',
    component: SingleFAQPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleFAQPageRoutingModule {}
