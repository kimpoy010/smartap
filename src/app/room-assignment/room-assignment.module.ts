import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomAssignmentPageRoutingModule } from './room-assignment-routing.module';

import { RoomAssignmentPage } from './room-assignment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomAssignmentPageRoutingModule
  ],
  declarations: [RoomAssignmentPage]
})
export class RoomAssignmentPageModule {}
