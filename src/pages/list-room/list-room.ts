import { CategoryPage } from './../category/category';
import { ApikeyProvider } from './../../providers/apikey/apikey';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ListRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-room',
  templateUrl: 'list-room.html',
})
export class ListRoomPage {
  roomCategory:string;
  typeRoom:any=[];
  categoryName:string;
  price:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams,private keyAPI : ApikeyProvider,public alertCtrl : AlertController) {
    this.roomCategory=this.navParams.data;
    this.loadDeteil();
  }

loadDeteil(){
  if(this.roomCategory=="อพาร์เมนท์"){
    this.keyAPI.loaddata_apartment().subscribe(data=>{
      this.typeRoom=data;
      console.log(data);
    });
}else if(this.roomCategory=="หอพัก"){
    this.keyAPI.loaddata_dorm().subscribe(data=>{
      this.typeRoom=data;
      console.log(data);
    });
}else if(this.roomCategory =="คอนโดมิเนียม"){
this.keyAPI.loaddata_condo().subscribe(data=>{
  this.typeRoom=data;
});
}
else if(this.roomCategory =="แมนชัน"){
this.keyAPI.loaddata_mansion().subscribe(data=>{
  this.typeRoom=data;
});
}
}

showDeteil(roomid,Category){
  this.navCtrl.push('DeteilPage',Category+'='+roomid);
}

getItems(ev: any){
  let val = ev.target.value;

  if (val !=0) {
    this.keyAPI.searchroom(val).subscribe(room=>{
      this.typeRoom = room;
    });
  }else {
   this.loadDeteil();
}
}

search(){
  let alert = this.alertCtrl.create();
  alert.setTitle('เลือกราคาห้องพัก');
  alert.addInput({
    type: 'checkbox',
    label: 'น้อยกว่า 2500',
    value: '1',
  });

  alert.addInput({
    type: 'checkbox',
    label: '2500-3000',
    value: '2'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'มากว่า 3000',
    value: '3'
  });
  alert.addButton('Cancel');
  alert.addButton({
    text: 'Okay',
    handler: data => {
    this.price =data;
      console.log(this.price);
      if(this.price==1){
        this.keyAPI.loadprice_1().subscribe(data=>{
         this.typeRoom = data;
        });
      }else if(this.price == 2){
        this.keyAPI.loadprice_2().subscribe(data=>{
          this.typeRoom = data;
         });
      }else if(this.price == 3){
        this.keyAPI.loadprice_3().subscribe(data=>{
          this.typeRoom = data;
         });
      }
    }
  });
  alert.present();
}

}


