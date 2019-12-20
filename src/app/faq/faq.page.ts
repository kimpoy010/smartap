import { Component, OnInit } from '@angular/core';

import { HTTP } from '@ionic-native/http/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
	public questions:any;
  constructor(public http:HTTP,public router:Router) { 
  	
  	this.http.get("../../assets/data/faq.json",{},{}).then(data=>{
  		this.questions = JSON.parse(data.data);
  	}).catch(err=>{

  	})
  }

  ngOnInit() {
  }

  goToFAQ(id){
  	let navigationExtras: NavigationExtras = {
        queryParams: {
          id: id
        }
      };
  	this.router.navigate(['single-faq'],navigationExtras);
  }



}
