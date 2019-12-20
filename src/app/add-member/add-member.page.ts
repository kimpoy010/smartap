import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
})
export class AddMemberPage implements OnInit {
	formData:any = {};
	id:string;
  constructor(private http: HTTP, public constant:ConstantsService,public route:ActivatedRoute,public alertController:AlertController) { 
  	this.route.queryParams.subscribe(params => {
  	  if (params && params.id) {
  	    this.id = params.id
  	  }
  	});
  }

  ngOnInit() {
  }

  addMember(){
    let user = JSON.parse(localStorage.getItem('userData'));
    let form = {
      "name" : this.formData.name,
      "email" : this.formData.email,
      "family_id" : this.id
    }

    this.http.post(this.constant.apiURL+'/api/add-member', form, {})
    .then(data => {
      //console.log(data);
      let dt = JSON.parse(data.data);
      console.log(dt);
    })
    .catch(error => {
      let dt = JSON.parse(error.error);
      this.presentAlertConfirm(dt.msg,'Ooops!');
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
