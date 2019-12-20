import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-redlight',
  templateUrl: './redlight.page.html',
  styleUrls: ['./redlight.page.scss'],
})
export class RedlightPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoNxt(){
  	this.router.navigate(['wifi']);
  }

}
