import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { ConstantsService } from '../constants.service'

import { RoomPage } from '../room/room.page'
@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.page.html',
  styleUrls: ['./family-info.page.scss'],
})
export class FamilyInfoPage implements OnInit {
  id:string;
  public family:any;
  public rooms:any;
  public members:any;

  constructor(private route: ActivatedRoute, 
    public router:Router,
    public modalController:ModalController,
    public constant:ConstantsService,
    private http:HTTP) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.id = params.id
        this.http.get(this.constant.apiURL+'/api/get-family-info/'+this.id,{},{})
        .then(data => {
          this.family = JSON.parse(data.data).family;
          this.rooms = JSON.parse(data.data).rooms;
          this.members = JSON.parse(data.data).members;
        }).catch(error => {

        });
      }
    });
  }

  ngOnInit() {
  }


  async presentModal() {
      const modal = await this.modalController.create({
        component: RoomPage,
        componentProps:{
          fam_id:this.id
        }
      });

      modal.onDidDismiss().then((dataReturned) => {
           if (dataReturned !== null && dataReturned !== undefined) {
             this.rooms = dataReturned.data
             console.log(this.rooms);
           }
      });
    return await modal.present();
  }

  isEmpty(obj){
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
      return false;
    }
    return true;
  }

  goToAddFamily(id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.router.navigate(['add-member'],navigationExtras);
  }

}
