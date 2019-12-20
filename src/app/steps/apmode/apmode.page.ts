import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apmode',
  templateUrl: './apmode.page.html',
  styleUrls: ['./apmode.page.scss'],
})
export class ApmodePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoNxt(){
  	this.router.navigate(['redlight']);
  }
}
