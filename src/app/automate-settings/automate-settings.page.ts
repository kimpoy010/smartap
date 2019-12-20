import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import {ConditionModalPage} from '../condition-modal/condition-modal.page';
// import {SchedModalPage} from '../sched-modal/sched-modal.page';

@Component({
  selector: 'app-automate-settings',
  templateUrl: './automate-settings.page.html',
  styleUrls: ['./automate-settings.page.scss'],
})
export class AutomateSettingsPage implements OnInit {
	public conditionValue:string = "";
	public operatorValue:string = "";
  public compareValue:string = "";
  public actionValue:string = "";
  deviceValue:string="";
  roomValue:string="";
	dataReturned:any;
	public formData:any = {};
  public autoList:any;

  	constructor(public modalController: ModalController,public router:Router) {

  	}

  	ngOnInit() {
  	}

  	changeCondition(){
  		if (this.conditionValue == 'weather') {
  			this.presentModal(this.conditionValue);
        this.operatorValue = 'equal to';
  		}

      if (this.conditionValue == 'schedule') {
        this.operatorValue = 'equal to';
      }

      if (this.conditionValue == 'location') {
        this.operatorValue = 'equal to';
      }
  	}

  	changeOperator(){
  		this.formData.operator = this.operatorValue;
  		console.log(this.formData.operator);
  	}

  	async presentModal(condition) {
	    const modal = await this.modalController.create({
	      component: ConditionModalPage,
	      componentProps: { 
	        factor: condition,
	      }
	    });

	   	modal.onDidDismiss().then((dataReturned) => {
   	      if (dataReturned !== null) {
   	        this.dataReturned = dataReturned.data;
   	        this.compareValue = dataReturned.data;
   	        this.formData.operator = 'equal to';
   	      }
   	    });
	    return await modal.present();
	}

  setAutomation(){
    let auto = localStorage.getItem('autoList');
    let list:any = [];
    if (auto == null) {
      let autos = {
        auto_name:this.formData.name,
        condition:this.conditionValue,
        operator:this.operatorValue,
        compare:this.compareValue,
        action:this.actionValue,
        room: this.roomValue,
        device:this.deviceValue
      }
      list.push(autos);
      localStorage.setItem('autoList', JSON.stringify(list));
    }else{
      let autos = {
        auto_name:this.formData.name,
        condition:this.conditionValue,
        operator:this.operatorValue,
        compare:this.compareValue,
        action:this.actionValue,
        room: this.roomValue,
        device:this.deviceValue
      }
      let currList:any = JSON.parse(auto);
      currList.push(autos);
      localStorage.setItem('autoList', JSON.stringify(currList));
    }
    
    this.router.navigate(['tabs/tabs/tab2']);

  }
}
