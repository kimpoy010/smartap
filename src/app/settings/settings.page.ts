import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  goToNotifications(){
  	this.router.navigate(['notification'])
  }

  goToAbout(){
    this.router.navigate(['about'])
  }
}
