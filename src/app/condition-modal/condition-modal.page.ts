import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';


@Component({
  selector: 'app-condition-modal',
  templateUrl: './condition-modal.page.html',
  styleUrls: ['./condition-modal.page.scss'],
})
export class ConditionModalPage implements OnInit {
	factor:string;
	weather:string;
  constructor(private modalController: ModalController,private navParams: NavParams) { }

  ngOnInit() {
  }

  async closeModal() {
    const onClosedData: string = this.weather;
    await this.modalController.dismiss(onClosedData);
  }

  async cancelModal() {
    await this.modalController.dismiss();
  }

  weatherSelect(weatherCondition){
  	this.weather = weatherCondition;
  	console.log(this.weather);
  }

}
