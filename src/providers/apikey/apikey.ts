import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ApikeyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApikeyProvider {
  
  constructor(public http: HttpClient) {

}
  loaddata_condo(){
    let url = 'http://10.8.8.39/todoslim3/public/condo';
    return this.http.get(url);
  }

  loaddata_apartment(){
    let url = 'http://10.8.8.39/todoslim3/public/apartment';
    return this.http.get(url);
  }

  loaddata_mansion(){
    let url = 'http://10.8.8.39/todoslim3/public/mansion';
    return this.http.get(url);
  }

  loaddata_dorm(){
    let url = 'http://10.8.8.39/todoslim3/public/dorm';
    return this.http.get(url);
  }

  loadDeteil(roomid:string){
    let url  = 'http://10.8.8.39/todoslim3/public/deteil/' + roomid;
    return this.http.get(url);
  }
  
  searchroom(query){
    let url  = 'http://10.8.8.39/todoslim3/public/search/room/'+query;
    return this.http.get(url);
  }

  loadrooms(){
    let url = 'http://10.8.8.39/todoslim3/public/roomlist';
    return this.http.get(url);
  }
//2000
  loadprice_1(){
    let url ='http://10.8.8.39/todoslim3/public/room/price20';
    return this.http.get(url);
  }
  //2500
  loadprice_2(){
    let url ='http://10.8.8.39/todoslim3/public/room/price25';
    return this.http.get(url);
  }
  //3000
  loadprice_3(){
    let url ='http://10.8.8.39/todoslim3/public/room/price30';
    return this.http.get(url);
  }

  //showroom
  showroom(room){
    let url ='http://10.8.8.39/todoslim3/public/showroom/'+room;
    return this.http.get(url);
  }

  showcom(id){
    let url = 'http://10.8.8.39/todoslim3/public/com/'+id;
    return this.http.get(url);
  }
}
