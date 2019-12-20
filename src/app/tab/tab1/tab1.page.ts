import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { HTTP } from '@ionic-native/http/ngx';
import { ConstantsService } from '../../constants.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
    public families:any = [{}];
    public devices:any = [{}];
    public rooms:any = [{}];
    public defaultFamilyID;
    public status:boolean;
   	constructor(public router:Router, public constant:ConstantsService, public http:HTTP) {
      this.http.setRequestTimeout(10.0);
      let id = JSON.parse(localStorage.getItem('userData')).id;
      this.http.get(this.constant.apiURL+'/api/get-user-info/'+id,{},{})
      .then(data => {
        this.families = JSON.parse(data.data).families;
        this.rooms = JSON.parse(data.data).rooms;
        this.devices = JSON.parse(data.data).devices;
        this.defaultFamilyID = this.families[0].id
      }).catch(error => {
        console.log(error.error)
      });     
   	}

  	ngOnInit() {
      
  	}

  	gotoDevice(id){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          id: id
        }
      };
		  this.router.navigate(['device-info'],navigationExtras);
	  }

	  switchToggle(){
      if (this.status == false) {
          localStorage.setItem('state','off');

      }else{
        localStorage.setItem('state','on');

      }
    }

    checkStatus(state){
      if (state == 'on') {
        return true;
        console.log(state)
      }else{
        return false;
      }
      
    }

    doRefresh(event) {
      let id = JSON.parse(localStorage.getItem('userData')).id;
      this.http.get(this.constant.apiURL+'/api/get-user-info/'+id,{},{})
      .then(data => {
        this.families = JSON.parse(data.data).families;
        this.rooms = JSON.parse(data.data).rooms;
        this.devices = JSON.parse(data.data).devices;
        this.defaultFamilyID = this.families[0].id;
        event.target.complete();
      }).catch(error => {
        console.log(error.error)
      });   

    }

   //  ionViewWillEnter(){
   //    this.state = localStorage.getItem('state');
   //    this.deviceAdd = JSON.parse(localStorage.getItem('device'));
   //    if (this.state  == null || this.state  == 'undefined' || this.state  == '') {
   //      this.state = 'off';
   //      this.status = false;
   //    }else{
   //       if (this.state == 'off') {
   //          this.status = false;
   //       }else{
   //         this.status = true;
   //       }
   //    }
   //  }

    // ionViewDidEnter(){
    //   this.state = localStorage.getItem('state');
    //   this.deviceAdd = JSON.parse(localStorage.getItem('device'));
    //   if (this.state  == null || this.state  == 'undefined' || this.state  == '') {
    //     this.state = 'off';
    //     this.status = false;
    //   }else{
    //      if (this.state == 'off') {
    //         this.status = false;
    //      }else{
    //        this.status = true;
    //      }
    //   }
    // }

    addDevice(){
      this.router.navigate(['apmode']);
    }

}
