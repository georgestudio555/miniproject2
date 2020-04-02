import { TestPage } from './../test/test';
import { InsertRoomPage } from './../insert-room/insert-room';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, MenuController, AlertController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {


  
  constructor(public navCtrl: NavController,private menu: MenuController,public alertCtrl: AlertController,public events : Events) {

  }

  goLogin() {
     this.navCtrl.setRoot(LoginPage); 
  }

  ionViewDidLoad(){ 
            
    this.events.publish('loggedin');
}
}
  

