import { Http, HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import "rxjs/add/operator/map";




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  regisResult: any = {};
  datauser:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http ,
    public alertCtrl: AlertController ,public events:Events) {
    this.regisResult.username = "";
     this.regisResult.password = ""; 
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  login() {
    if (this.regisResult.username != "" && this.regisResult.password != "") {
      console.log("user", this.regisResult.username);
      console.log("pass", this.regisResult.password);
      let url = 'http://10.8.8.39/database/login.php';
      let datapost = JSON.stringify({
        user: this.regisResult.username,
        pass: this.regisResult.password
      });

      
      this.http.post(url,datapost).map(res=>res.json())
      .subscribe((data: any) => {
      
        if(data!="NULL")
        {
          this.events.publish('user:Loggedin');
          this.navCtrl.setRoot('TestPage',data);
        
        }else{
          let alert = this.alertCtrl.create({
            message: 'โปรดใส่ username และ password ให้ถูกต้อง',
            buttons: [
              {
                text: 'OK',
                role: 'OK',
              }
            ]
          });
          alert.present();
        }
      });
    } else {
      let alert = this.alertCtrl.create({
        message: 'กรุณาตรวจสอบ username และ password',
        buttons: [
          {
            text: 'OK',
            role: 'OK',
          }
        ]
      });
      alert.present();
    }
  }
  goSignUp(){
    this.navCtrl.push('SignUpPage');
  }
}
