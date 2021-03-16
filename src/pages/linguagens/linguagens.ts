import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LiteraturaprimeiroPage } from '../literaturaprimeiro/literaturaprimeiro';
import { LiteraturasegundaPage } from '../literaturasegundo/literaturasegunda';
import { LiteraturaterceiroPage } from '../literaturaterceiro/literaturaterceiro';

@IonicPage()
@Component({
  selector: 'page-linguagens',
  templateUrl: 'linguagens.html',
})
export class LinguagensPage {
   
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinguagensPage');
  }

  itemLiteraturaPrimeiro(event, items) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LiteraturaprimeiroPage, {
      item: items
    });
  }

  itemLiteraturaSegundo(event, items) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LiteraturasegundaPage, {
      item: items
    });
  }

  itemLiteraturaTerceiro(event, items) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LiteraturaterceiroPage, {
      item: items
    });
  }

}
