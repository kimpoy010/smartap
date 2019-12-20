import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  public repeatOff:string;
  public repeatOn:string;
  public ishiddenOn:boolean;
  public ishiddenOff:boolean;

  constructor(public modalCtrl: ModalController) { 
    this.repeatOn = "";
    this.repeatOff = "";
    this.ishiddenOn = false;
    this.ishiddenOff = false;
  }

  ngOnInit() {
  }

  closeMe(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  selectRepeatOn(){
    if (this.repeatOn == 'specific') {
      this.ishiddenOn = true;
    }else{
      this.ishiddenOn = false;
    }
  }

  selectRepeatOff(){
    if (this.repeatOff == 'specific') {
      this.ishiddenOff = true;
    }else{
      this.ishiddenOff = false;
    }
  }

}
