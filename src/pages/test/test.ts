import { InsertRoomPage } from './../insert-room/insert-room';

import { PopoverComponent } from './../../components/popover/popover';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  datauser:any=[];
  ev:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,
    public modalController: ModalController,public event : Events) {
   
  }

  ionViewDidLoad() {

    
    // this.datauser=this.navParams.data;
    // console.log(this.datauser);
    // event.subs('user:Loggedin',()=>{
    //   this.datauser=this.navParams.data;
    // console.log(this.datauser);
    // });
  }




  
}
