import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  constructor(private router:Router, public popoverController: PopoverController ) { }

  ngOnInit() {}

  logout(){
  	this.router.navigate(['home']);
  	this.popoverController.dismiss();
  }

}
