import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { ConstantsService } from '../constants.service'


@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  public formData:any={};
  public family_id:string = this.navParams.get('fam_id');
  public returnedData:any = {};
  constructor(public modalController: ModalController,public http:HTTP, public constant:ConstantsService,private navParams: NavParams) { 
    console.log(this.family_id);
    this.http.get(this.constant.apiURL+'/api/get-family-info/'+this.family_id,{},{})
    .then(data => {
      this.returnedData = JSON.parse(data.data).rooms;
    }).catch(error => {

    });
  }

  ngOnInit() {
  }

  closeMe(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  closeModal() {
    if (this.returnedData !== null || Object.entries(this.returnedData).length !== 0) {
        const onClosedData: string = this.returnedData;
        this.modalController.dismiss(onClosedData);
    }
  }

  adRoom(){
    let user = JSON.parse(localStorage.getItem('userData'));
    let form = {
      "family_id" : this.family_id,
      "room_name" : this.formData.room_name,
    }
    this.http.post(this.constant.apiURL+'/api/new-room', form, {})
    .then(data => {
      let dt = JSON.parse(data.data);
      this.returnedData = dt.rooms;
      this.closeModal();
    })
    .catch(error => {
      let dt = JSON.parse(error.error);
      console.log(dt)
    });
  }
}
