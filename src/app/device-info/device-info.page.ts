import { Component, OnInit } from '@angular/core';
import { SchedulePage } from '../tab/schedule/schedule.page';
import { ModalController } from '@ionic/angular';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router';

import { HTTP } from '@ionic-native/http/ngx';

import { RoomAssignmentPage } from '../room-assignment/room-assignment.page';
import { ConstantsService } from '../constants.service'

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.page.html',
  styleUrls: ['./device-info.page.scss'],
})
export class DeviceInfoPage implements OnInit {
  id:string = null;
	public state:string;
  public bgColor:string;
  public deviceInfo:any = {};

  constructor(public modalController: ModalController,public router:Router,private route: ActivatedRoute,public http:HTTP,public constant:ConstantsService ) { 
    this.route.queryParams.subscribe(params => {
          if (params && params.id) {
              this.id = params.id;
              this.http.get(this.constant.apiURL+'/api/get-device-info/'+this.id,{},{})
              .then(data => {
                  this.deviceInfo = JSON.parse(data.data).device
                  this.state = this.deviceInfo.status;
                    if (this.state == 'on') {
                      this.bgColor = 'dark';
                    }else{
                      this.bgColor = 'light';
                    }
              }).catch(error => {
                console.log(error.error)
              });
          }
        });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
          this.id = params.id;
          this.http.get(this.constant.apiURL+'/api/get-device-info/'+this.id,{},{})
          .then(data => {
              this.deviceInfo = JSON.parse(data.data).device
              this.state = this.deviceInfo.status;
                if (this.state == 'on') {
                  this.bgColor = 'dark';
                }else{
                  this.bgColor = 'light';
                }
          }).catch(error => {
            console.log(error.error)
          });
      }
    });
  }

  switchToggle(){
  	this.http.get(this.constant.apiURL+'/api/switch-device/'+this.deviceInfo.id,{},{})
    .then(data => {
        this.deviceInfo = JSON.parse(data.data).device
        this.state = this.deviceInfo.status;
          if (this.state == 'on') {
            this.bgColor = 'dark';
          }else{
            this.bgColor = 'light';
          }
    }).catch(error => {
      console.log(error.error)
    });
  }

  async presentModal() {
      const modal = await this.modalController.create({
        component: SchedulePage
      });
      return await modal.present();
  }

  async roomAssignmentModal() {
      const modal = await this.modalController.create({
        component: RoomAssignmentPage,
        componentProps:{
            
        }
      });
      return await modal.present();
  }

  goToEnergy(){
    this.router.navigate(['energy']);
  }
}
