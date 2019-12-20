import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';

import { AddFamilyPage } from '../add-family/add-family.page';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.page.html',
  styleUrls: ['./family.page.scss'],
})
export class FamilyPage implements OnInit {
  public families:any;
  public userData:any = {};
  constructor(public modalController: ModalController, public router:Router,private http: HTTP, public constant:ConstantsService) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    let id = this.userData.id;
    this.http.get(this.constant.apiURL+'/api/get-families/'+id,{},{})
    .then(data => {
      this.families = JSON.parse(data.data).families;
    }).catch(error => {

    });
  }

  ngOnInit() {
    let id = this.userData.id;
    this.http.get(this.constant.apiURL+'/api/get-families/'+id,{},{})
    .then(data => {
      this.families = JSON.parse(data.data).families;
    }).catch(error => {

    });
  }

  async presentFamilyModal() {
      const modal = await this.modalController.create({
        component: AddFamilyPage
      });
      
      modal.onDidDismiss().then((res) => {
          this.families = res.data.fams;
      });
      return await modal.present();
  }

  goToFamilyInfo(id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
  	this.router.navigate(['family-info'],navigationExtras);
  }

}
