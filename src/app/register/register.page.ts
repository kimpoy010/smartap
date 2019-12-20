import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public formData:any = {};
  constructor(private http: HTTP, public alertController:AlertController, private router:Router) { 
    this.formData.email = "";
    this.formData.password = "";
    this.formData.password_confirmation = "";
  }

  ngOnInit() {
  }

  register(){
  	if (this.formData.password == this.formData.password_confirmation) {
  		  this.http.post('http://sakura-smart.com/api/register', this.formData, {})
        .then(data => {
          let dt = JSON.parse(data.data);
          this.presentAlertConfirm(dt.msg);
        })
        .catch(error => {

          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);

        });
  	}
  	
  }

  async presentAlertConfirm(msg:string) {
      const alert = await this.alertController.create({
        header: 'Success!',
        message: msg,
        buttons: [
        {
            text: 'Okay',
            handler: () => {
              this.router.navigate(['home']);
            }
          }
        ]
      });

      await alert.present();
    }

}
