import { Http } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { ApikeyProvider } from './../../providers/apikey/apikey';
import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingCmp, Img, ActionSheetController, Events} from 'ionic-angular';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import { SocialSharing } from '@ionic-native/social-sharing';
 /**
 * Generated class for the DeteilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deteil',
  templateUrl: 'deteil.html',
})
export class DeteilPage {

 dataDeteil:any=[];
 showdeteileData:any=[];
 showdeteilImg:any;
 member:any={};
roomdeteil : any;
 score:any;
 datcom:any;
shcom:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private keyAPI : ApikeyProvider,private socialSharing : SocialSharing,private actionSheetController:ActionSheetController,
    private events : Events,public http:HttpClient) {
    this.loadDeteil();
    this.roomdeteil = this.navParams.get("data");

    this.events.subscribe('star-rating:changed',(note)=> {
      this.score =note;
    });
    
}

  loadDeteil() {
  this.dataDeteil=this.navParams.data;
  console.log(this.dataDeteil);
  this.keyAPI.loadDeteil(this.dataDeteil).subscribe((data:any=[])=>{
    console.log(data['rooms']);
    console.log(data['img']);
    this.showdeteileData = data['rooms'];
    this.showdeteilImg=data['img'];
    }
    );
    this.keyAPI.showcom(this.dataDeteil).subscribe((data)=>{
      this.datcom =data;
    });

   
   
  }

  shareRoom(show){
  let roomshare = this.actionSheetController.create({
    title:"Share room",
    buttons:[
      {
        text:"Share on Facebook",
        icon:"logo-facebook",
        handler:()=>{
          this.socialSharing.shareViaFacebook(show.room_name,show.room_address,show.room_category);
        }
      }
    ]
  });
  roomshare.present();
  } 



  textroom(roomid){
   
    if(this.member.text != ""){
      console.log(this.member.text);
      console.log(roomid);
      let url = 'http://10.8.8.39/database/comment.php';
      let datapost = JSON.stringify({
        text:this.member.text,
        idroom:roomid
      });
      this.http.post(url,datapost).subscribe(data=>{
        console.log(data);
      });
      this.member.text ="";
    }else{
      console.log("FOUND");
    }
  }


  scoreview(roomid){
    if(this.score != ''){
      console.log(this.score);
      console.log(roomid);
      let url = 'http://10.8.8.39/database/upscore.php';
      let datapost = JSON.stringify({
        score: this.score,
        idroom:roomid
      });
      this.http.post(url,datapost).subscribe(data=>{
        console.log(data);
      })
    }else{
      console.log("FOUND");
    }
    
  } 



  }


