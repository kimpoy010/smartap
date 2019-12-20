import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AddDevicePageModule } from './add-device/add-device.module';
import { SchedulePageModule } from './tab/schedule/schedule.module';
import { RoomPageModule } from './room/room.module';
import { AddFamilyPageModule } from './add-family/add-family.module';
import {ConditionModalPageModule} from './condition-modal/condition-modal.module';
import {SchedModalPageModule} from './sched-modal/sched-modal.module';
import {RoomAssignmentPageModule} from './room-assignment/room-assignment.module';
import { Camera } from '@ionic-native/camera/ngx';
import { AppRoutingModule } from './app-routing.module';
import { HTTP } from '@ionic-native/http/ngx';

import { HttpClientModule } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent
  ],
  entryComponents: [AccountComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AddDevicePageModule,
    SchedulePageModule,
    RoomPageModule,
    AddFamilyPageModule,
    ConditionModalPageModule,
    SchedModalPageModule,
    RoomAssignmentPageModule,
    HttpClientModule
  ],
  providers: [
  	HTTP,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ConstantsService,
    Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
