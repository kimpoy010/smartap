import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomAssignmentPage } from './room-assignment.page';

const routes: Routes = [
  {
    path: '',
    component: RoomAssignmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomAssignmentPageRoutingModule {}
