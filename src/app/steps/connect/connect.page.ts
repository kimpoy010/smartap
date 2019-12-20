import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {
	public ssid:string;
	public password:string;

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoNxt(){
  	if (this.password != null && this.ssid != null) {
  		this.router.navigate(['connecting']);
  	}
  	
  }
}
