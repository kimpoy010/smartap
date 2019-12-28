import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

import { RoomPage } from '../room/room.page'

import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-add-family',
  templateUrl: './add-family.page.html',
  styleUrls: ['./add-family.page.scss'],
})
export class AddFamilyPage implements OnInit {
  public formData:any = {};
  public returnData:any;
  constructor(public modalController: ModalController, private http: HTTP,public alertController:AlertController, public constant:ConstantsService) { 

  }

  ngOnInit() {
  }

  async presentModal() {
      const modal = await this.modalController.create({
        component: RoomPage
      });
      return await modal.present();
  }
  
  addFamily(){
    let user = JSON.parse(localStorage.getItem('userData'));
    let form = {
      "user_id" : user.id,
      "family_name" : this.formData.name,
      "location" : this.formData.location,
    }
    this.http.post(this.constant.apiURL+'/api/new-family', form, {})
    .then(data => {
      //console.log(data);
      let dt = JSON.parse(data.data);
      this.returnData = data.data
      this.closeMe(this.returnData);
    })
    .catch(error => {
      let dt = JSON.parse(error.error);
      console.log(dt)
    });
  }

  async closeMe(result) {
    if (result == undefined) {
      await this.modalController.dismiss();
    }else{
      const onClosedData: string = JSON.parse(result);
      await this.modalController.dismiss(onClosedData);
    }
    
  }

  async closeModal(){
     await this.modalController.dismiss();
  }
  
  async presentAlertConfirm(msg:string, title:string) {
      const alert = await this.alertController.create({
        header: title,
        message: msg,
        buttons: [
          {
            text: 'Okay',
          }
        ]
      });
      await alert.present();
    }
}
