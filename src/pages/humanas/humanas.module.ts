import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HumanasPage } from './humanas';

@NgModule({
  declarations: [
    HumanasPage,
  ],
  imports: [
    IonicPageModule.forChild(HumanasPage),
  ],
})
export class HumanasPageModule {}
