import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'tabs',
    loadChildren: () => import('./tab/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'devices',
    loadChildren: () => import('./devices/devices.module').then( m => m.DevicesPageModule)
  },
  {
    path: 'device-info',
    loadChildren: () => import('./device-info/device-info.module').then( m => m.DeviceInfoPageModule)
  },
  {
    path: 'add-device',
    loadChildren: () => import('./add-device/add-device.module').then( m => m.AddDevicePageModule)
  },
  {
    path: 'apmode',
    loadChildren: () => import('./steps/apmode/apmode.module').then( m => m.ApmodePageModule)
  },
  {
    path: 'connect',
    loadChildren: () => import('./steps/connect/connect.module').then( m => m.ConnectPageModule)
  },
  {
    path: 'redlight',
    loadChildren: () => import('./steps/redlight/redlight.module').then( m => m.RedlightPageModule)
  },
  {
    path: 'wifi',
    loadChildren: () => import('./steps/wifi/wifi.module').then( m => m.WifiPageModule)
  },
  {
    path: 'connecting',
    loadChildren: () => import('./steps/connecting/connecting.module').then( m => m.ConnectingPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./steps/success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'failed',
    loadChildren: () => import('./steps/failed/failed.module').then( m => m.FailedPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'family',
    loadChildren: () => import('./family/family.module').then( m => m.FamilyPageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'room',
    loadChildren: () => import('./room/room.module').then( m => m.RoomPageModule)
  },
  {
    path: 'add-family',
    loadChildren: () => import('./add-family/add-family.module').then( m => m.AddFamilyPageModule)
  },
  {
    path: 'family-info',
    loadChildren: () => import('./family-info/family-info.module').then( m => m.FamilyInfoPageModule)
  },
  {
    path: 'add-member',
    loadChildren: () => import('./add-member/add-member.module').then( m => m.AddMemberPageModule)
  },
  {
    path: 'energy',
    loadChildren: () => import('./energy/energy.module').then( m => m.EnergyPageModule)
  },
  {
    path: 'automate-settings',
    loadChildren: () => import('./automate-settings/automate-settings.module').then( m => m.AutomateSettingsPageModule)
  },
  {
    path: 'condition-modal',
    loadChildren: () => import('./condition-modal/condition-modal.module').then( m => m.ConditionModalPageModule)
  },
  {
    path: 'sched-modal',
    loadChildren: () => import('./sched-modal/sched-modal.module').then( m => m.SchedModalPageModule)
  },
  {
    path: 'room-assignment',
    loadChildren: () => import('./room-assignment/room-assignment.module').then( m => m.RoomAssignmentPageModule)
  },
  {
    path: 'single-faq',
    loadChildren: () => import('./single-faq/single-faq.module').then( m => m.SingleFAQPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
