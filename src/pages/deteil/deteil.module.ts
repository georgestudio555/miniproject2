import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeteilPage } from './deteil';
import { StarRatingModule } from 'ionic3-star-rating';
@NgModule({
  declarations: [
    DeteilPage,
  ],
  imports: [
    IonicPageModule.forChild(DeteilPage),
    StarRatingModule
  ],
})
export class DeteilPageModule {}
