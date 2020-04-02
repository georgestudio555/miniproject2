import { TestPage } from './../../pages/test/test';
import { InsertRoomPage } from './../../pages/insert-room/insert-room';
import { Component } from '@angular/core';
import { App, Nav, MenuController } from 'ionic-angular';
/**
 * Generated class for the HeaderMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {
  constructor(//public authService: AuthServiceProvider,
    public menuCtrl: MenuController,
    public app: App) {
}

logoutClicked() {
  console.log("Logout");
  //this.authService.logout();
  this.menuCtrl.close();
  var nav = this.app.getRootNav();
  // nav.setRoot(InsertRoomPage);

}

}
