import { Component, OnInit } from '@angular/core';
import { ModalController,AlertController  } from '@ionic/angular';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.page.html',
  styleUrls: ['./add-device.page.scss'],
})
export class AddDevicePage implements OnInit {

  constructor(private modalCtrl: ModalController,public alertController: AlertController) { }

  ngOnInit() {
  }

  closeMe(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Information',
      subHeader: '',
      message: 'Unable to identify the given Device ID. Please try again!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
