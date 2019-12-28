import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-connecting',
  templateUrl: './connecting.page.html',
  styleUrls: ['./connecting.page.scss'],
})
export class ConnectingPage implements OnInit {
	public buttonText:string;
	public connectionState:string;
  constructor(public router:Router, public alertController:AlertController) { 
  	setTimeout( () => {
	    this.presentAlertConfirm();
      this.router.navigate(['tabs/tabs/tab1']);
	  }, 6000);
  }

  ngOnInit() {
  }

  async presentAlertConfirm() {
      localStorage.setItem('device','1');
      const alert = await this.alertController.create({
        header: "Success!",
        message: 'Device connected successfully!',
        buttons: [
          {
            text: 'Okay',
          }
        ]
      });

      await alert.present();
    }


}
