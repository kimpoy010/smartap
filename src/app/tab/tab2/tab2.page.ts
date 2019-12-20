import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
	public autoList:any = [];
  constructor(public router:Router) {
  	this.autoList = JSON.parse(localStorage.getItem('autoList'));
  }

  ngOnInit() {
    this.autoList = JSON.parse(localStorage.getItem('autoList'));
  }

  ionViewDidEnter(){
    this.autoList = JSON.parse(localStorage.getItem('autoList'));
  }

goToAutomate(){
	this.router.navigate(['automate-settings']);
}
  
  doRefresh(event) {
      console.log('Begin async operation');

      setTimeout(() => {
        this.autoList = JSON.parse(localStorage.getItem('autoList'));
        event.target.complete();
      }, 2000);
    }
}
