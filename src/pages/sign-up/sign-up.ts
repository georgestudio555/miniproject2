import { LoginPage } from './../login/login';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import "rxjs/add/operator/map";


/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  regisResult:any= {};

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public alertCtrl : AlertController) {
    this.regisResult.name ="";  
    this.regisResult.surname ="";
    this.regisResult.username =""; 
    this.regisResult.password =""; 
    this.regisResult.email =""; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(){

    if(this.regisResult.name !="" && this.regisResult.surname !="" &&this.regisResult.password!="" &&this.regisResult.email!="" && this.regisResult.username!=""){
     console.log("user",this.regisResult.name);
    console.log("surname",this.regisResult.surname);
    console.log("pass",this.regisResult.email);
    console.log("username",this.regisResult.username); 
    console.log("email",this.regisResult.password);

    let url= 'http://10.8.8.39/database/signup.php';
       let datapost = JSON.stringify({
        name:this.regisResult.name,
        sname:this.regisResult.surname,
        email:this.regisResult.email,
        username:this.regisResult.username,
        password:this.regisResult.password
      });
      let alert = this.alertCtrl.create({
        message: 'ยืนยันการสมัคร',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.http.post(url,datapost)
              .subscribe(data=>{
               console.log(data);
               this.navCtrl.push(LoginPage);
              });
            }
          },
          {
            text: 'Cancle',
            handler: () => {
              console.log('Disagree clicked');
            }
          }

        ]
      });
      alert.present();
 
    }else{
      let alert = this.alertCtrl.create({
        message: 'กรุณากรอกข้อมูล',
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

}
