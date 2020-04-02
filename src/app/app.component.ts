
import { LogoutPage } from './../pages/logout/logout';
import { HeaderMenuComponent } from './../components/header-menu/header-menu';
import { HomePage } from './../pages/home/home';
import { InsertRoomPage } from './../pages/insert-room/insert-room';
import { TestPage } from './../pages/test/test';
import { VsroomPage } from './../pages/vsroom/vsroom';
import { CategoryPage } from './../pages/category/category';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;

  rootPage: any =LoginPage;
  pages: Array<{title: string, component: any}>;
  
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public events : Events,public menuCtrl: MenuController,) {
     this.initializeApp();
    this.pages = [
      { title: 'HOME', component: HomePage },
      { title: 'ประเภทห้องเช่า', component: CategoryPage },
      { title: 'เปรียบเทียบห้องเช่า', component: VsroomPage },
      { title: 'ลงชื่อเข้าใช้', component: LoginPage }
    ];

  events.subscribe('user:Loggedin',()=>{
    this.pages = [
      { title: 'ประเภทห้องเช่า', component: CategoryPage },
      { title: 'เปรียบเทียบห้องเช่า', component: VsroomPage },
      { title: 'เพิ่มข้อมูลห้องพัก', component: InsertRoomPage },
      { title: 'ออกจากระบบ', component: LogoutPage }
    ];

  });
  events.subscribe('user:Loggedout',()=>{
    this.pages = [
      { title: 'HOME', component: HomePage },
      { title: 'ประเภทห้องเช่า', component: CategoryPage },
      { title: 'เปรียบเทียบห้องเช่า', component: VsroomPage },
      { title: 'ลงชื่อเข้าใช้', component: LoginPage }
    ];
  });
  
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
