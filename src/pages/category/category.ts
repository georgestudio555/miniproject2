import { DeteilPage } from './../deteil/deteil';
import { TestPage } from './../test/test';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  category = [{name:'คอนโดมิเนียม',imgeUrl:'assets/imgs/คอนโดมิเนียม.png'},
              {name:'อพาร์เมนท์',imgeUrl:'assets/imgs/อพาร์เมนท์.jpg'},
              {name:'แมนชัน',imgeUrl:'assets/imgs/แมชัน.jpg'},
              {name:'หอพัก',imgeUrl:'assets/imgs/หอพัก.jpg'}
             ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  viewDetails(categoryName:string){
    console.log(categoryName);
     this.navCtrl.push('ListRoomPage',categoryName);
}

}
