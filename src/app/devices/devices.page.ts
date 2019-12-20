import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';

import { AddDevicePage } from '../add-device/add-device.page';
import { AccountComponent } from '../account/account.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {

  public state:string;
  public deviceAdd:string;
  public status:boolean;
  public toggleSwitch:any;
  public userData:any;
  
  constructor(public popoverController: PopoverController, public router:Router,public modalController: ModalController) { 
    this.state = localStorage.getItem('state');
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.deviceAdd = JSON.parse(localStorage.getItem('device'));
    if (this.state  == null || this.state  == 'undefined' || this.state  == '') {
      this.state = 'off';
      this.status = false;
    }else{
       if (this.state == 'off') {
          this.status = false;
       }else{
         this.status = true;
       }
    }
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.state = localStorage.getItem('state');

    if (this.state  == null || this.state  == 'undefined' || this.state  == '') {
      this.state = 'off';
      this.status = false;
    }else{
       if (this.state == 'off') {
          this.status = false;
       }else{
         this.status = true;
       }
    }
  }

  	async presentPopover(ev: any) {
      const popover = await this.popoverController.create({
        component: AccountComponent	,
        event: ev,
        translucent: true
      });
      return await popover.present();
    }

    gotoDevice(){
    	this.router.navigate(['device-info']);
    }

    switchToggle(){
      if (this.status == false) {
          localStorage.setItem('state','off');
          this.state = 'off';
      }else{
        localStorage.setItem('state','on');
        this.state = 'on';
      }
    }

    async presentModal() {
      const modal = await this.modalController.create({
        component: AddDevicePage
      });
      return await modal.present();
    }
}
