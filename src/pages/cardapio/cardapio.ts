import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SegundaPage } from '../segunda/segunda';
import { SextaPage } from '../sexta/sexta';
import { QuintaPage } from '../quinta/quinta';
import { QuartaPage } from '../quarta/quarta';
import { TercaPage } from '../terca/terca';

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {

  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

  itemSegunda(event, items) {
    this.navCtrl.push(SegundaPage, {
      item: items
    });
  }

  itemTerca(event, items) {
    this.navCtrl.push(TercaPage, {
      item: items
    });
  }

  itemQuarta(event, items) {
    this.navCtrl.push(QuartaPage, {
      item: items
    });
  }

  itemQuinta(event, items) {
    this.navCtrl.push(QuintaPage, {
      item: items
    });
  }

  itemSexta(event, items) {
    this.navCtrl.push(SextaPage, {
      item: items
    });
  }

}
