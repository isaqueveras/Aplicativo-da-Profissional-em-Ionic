import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExatasprimeiroPage } from '../exatasprimeiro/exatasprimeiro';
import { ExatasterceiroPage } from '../exatasterceiro/exatasterceiro';
import { ExatassegundoPage } from '../exatassegundo/exatassegundo';


@IonicPage()
@Component({
  selector: 'page-exatas',
  templateUrl: 'exatas.html',
})
export class ExatasPage {

  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExatasPage');
  }

  itemExatasPrimeiro(event, items) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ExatasprimeiroPage, {
      item: items
    });
  }

  itemExatasSegundo(event, items) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ExatassegundoPage, {
      item: items
    });
  }

  itemExatasTerceiro(event, items) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ExatasterceiroPage, {
      item: items
    });
  }

}
