import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { HumanasprimeiroPage } from '../humanasprimeiro/humanasprimeiro';
import { HumanassegundoPage } from '../humanassegundo/humanassegundo';
import { HumanasterceiroPage } from '../humanasterceiro/humanasterceiro';

@IonicPage()
@Component({
  selector: 'page-humanas',
  templateUrl: 'humanas.html',
})
export class HumanasPage {

  items: Array<{title: string}>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider) {
    this.items = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HumanasPage');
  }

  itemHumanasPrimeiro(event, items) {
    this.navCtrl.push(HumanasprimeiroPage, {
      item: items
    });
  }

  itemHumanasSegundo(event, items) {
    this.navCtrl.push(HumanassegundoPage, {
      item: items
    });
  }

  itemHumanasTerceiro(event, items) {
    this.navCtrl.push(HumanasterceiroPage, {
      item: items
    });
  }

}
