import { LoginPage } from './../../pages/login/login';
import { NavController, ViewController, App } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {


 items:any;

  constructor(public navCtrl :NavController,public app : App) {
    this.items= [
      {item:'ออกจากระบบ'},
      
    ]
  }

  logOut(item){
   let nav =this.app.getRootNav();
   nav.setRoot(LoginPage);
  }

}
