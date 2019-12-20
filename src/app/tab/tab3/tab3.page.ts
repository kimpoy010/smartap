import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  public userData:any = {};
  public image:string = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  public username:string;
  constructor(public router:Router) { 
    let data = localStorage.getItem('userData');
    if (data != null || data != 'undefined') {
     this.userData = JSON.parse(data);
    }

    let photo = localStorage.getItem('avatar');
    if (!photo) {
      
    }else{
      this.image = photo;
    }

    let username = localStorage.getItem('username');
    if (!username) {
      
    }else{
      this.username = username;
    }
  }

  ngOnInit() {
  }
  doRefresh(event) {
      console.log('Begin async operation');

      setTimeout(() => {
        let photo = localStorage.getItem('avatar');
        if (!photo) {
          
        }else{
          this.image = photo;
        }

        let username = localStorage.getItem('username');
        if (!username) {
          
        }else{
          this.username = username;
        }
        event.target.complete();
      }, 2000);
    }
    
  logout(){
  	localStorage.setItem('userData','');
    this.router.navigate(['home']);
  }

  goToSettings(){
    this.router.navigate(['settings']);
  }

  goToHelp(){
    this.router.navigate(['help'])
  }

  goToPersonal(){
    this.router.navigate(['personal'])
  }

  goToFamily(){
    this.router.navigate(['family'])
  }
}
