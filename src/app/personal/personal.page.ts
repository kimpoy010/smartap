import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HTTP } from '@ionic-native/http/ngx';

import { ConstantsService } from '../constants.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
	public username:string;
	public image:string = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
	public temp:string = 'C';
	public timeZone:string = 'Asia/Manila';

  constructor(private camera: Camera,
  		private http:HTTP,
  		private constant:ConstantsService,public alertController: AlertController) { 
  		let photo = localStorage.getItem('avatar');
  		if (!photo) {
  			
  		}else{
  			this.image = photo
  		}

  		let username = localStorage.getItem('username');
  		if (!username) {
  			
  		}else{
  			this.username = username;
  		}
  }

  ngOnInit() {
  }

  changePhoto(){
  		const options: CameraOptions = {
  		  quality: 100,
  		  destinationType: this.camera.DestinationType.FILE_URI,
  		  encodingType: this.camera.EncodingType.JPEG,
  		  mediaType: this.camera.MediaType.PICTURE,
  		  sourceType:0
  		}

  		this.camera.getPicture(options).then((imageData) => {
  		 let base64Image = 'data:image/jpeg;base64,' + imageData;
  		 this.image = base64Image;
  		 localStorage.setItem('avatar',this.image);
  		}, (err) => {
  			console.log(err)
  		});
  }

  changeUsername(){
  	localStorage.setItem('username',this.username);
  }

 async presentAlertConfirm() {
   const alert = await this.alertController.create({
     header: 'Confirm!',
     message: 'Deactivating your account deletes all your userdata and linked devices. Are you sure you want to continue?',
     buttons: [
       {
         text: 'Cancel',
         role: 'cancel',
         cssClass: 'secondary',
         handler: (blah) => {
           console.log('Confirm Cancel: blah');
         }
       }, {
         text: 'Yes',
         handler: () => {
           console.log('Confirm Okay');
         }
       }
     ]
   });

   await alert.present();
 }
}
