import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-faq',
  templateUrl: './single-faq.page.html',
  styleUrls: ['./single-faq.page.scss'],
})
export class SingleFAQPage implements OnInit {
	public question:any = {};
	id:string = null;
  constructor(public http:HTTP,public router:Router,public route:ActivatedRoute) { 
  	this.route.queryParams.subscribe(params => {
  	      if (params && params.id) {
  	          this.id = params.id;
  	      }
  	    });

  	this.http.get("../../assets/data/faq.json",{},{}).then(data=>{
  		let questions = JSON.parse(data.data);
  		this.question = questions[this.id];
  		console.log(this.question);
  	}).catch(err=>{

  	})
  }

  ngOnInit() {
  }

}
