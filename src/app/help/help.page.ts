import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(public router:Router,private iab: InAppBrowser) { }

  ngOnInit() {
  }

  goToFAQs(){
  	this.router.navigate(['faq'])
  }

  goToMessage(){
  	this.router.navigate(['message']);
  }

  openHelpCenter(){
    const browser = this.iab.create('https://sakura-smart.com/','_system');
  }

}
