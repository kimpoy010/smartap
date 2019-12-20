import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-room-assignment',
  templateUrl: './room-assignment.page.html',
  styleUrls: ['./room-assignment.page.scss'],
})
export class RoomAssignmentPage implements OnInit {

	@Input() firstName: string;
  constructor(public modalController: ModalController, public router:Router) { }

  ngOnInit() {
  }

  	dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
        'dismissed': true
      });
    }

}
