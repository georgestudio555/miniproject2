import { DeteilPage } from './../pages/deteil/deteil';
import { LogoutPage } from './../pages/logout/logout';
import { TestPage } from './../pages/test/test';
import { HeaderMenuComponent } from './../components/header-menu/header-menu';
import { InsertRoomPage } from './../pages/insert-room/insert-room';
import { PopoverComponent } from './../components/popover/popover';
import { VsroomPage } from './../pages/vsroom/vsroom';
import { CategoryPage } from './../pages/category/category';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { ApikeyProvider } from '../providers/apikey/apikey';
import { HttpClientModule } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { StarRatingModule } from 'ionic3-star-rating';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
     LoginPage,
    CategoryPage,
    VsroomPage,
    PopoverComponent,
    InsertRoomPage,
    HeaderMenuComponent,
    
    LogoutPage,
   
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    StarRatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CategoryPage,
    VsroomPage,
    PopoverComponent,
    InsertRoomPage,
    HeaderMenuComponent,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,ApikeyProvider,SocialSharing,ImagePicker,File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
