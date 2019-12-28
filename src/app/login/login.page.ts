import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

import { ConstantsService } from '../constants.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	public formData:any= {};
	public password:string;
  public apiUrl:string;
  constructor(private router:Router, public alertController:AlertController, private http: HTTP, public constant:ConstantsService) {
  	this.formData.email = "";
  	this.formData.password ="";
    let userD = localStorage.getItem('userData');
    console.log("used data: "+userD)
    if (userD != null || userD != undefined || userD != '') {
       let userData = JSON.parse(userD);
       if (userData !== null ) {
          this.router.navigate(['tabs/tabs']);
       }
    }
    
  }

  ngOnInit() {
  }

  login(){
  	this.http.post(this.constant.apiURL+'/api/login', this.formData, {})
    .then(data => {
      let dt = JSON.parse(data.data);
      localStorage.setItem('userData',JSON.stringify(dt.user));
      this.router.navigate(['tabs/tabs']);
    })
    .catch(error => {
      let dt = JSON.parse(error.error);
      this.presentAlertConfirm(dt.msg, 'Ooooops!');
    });
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
