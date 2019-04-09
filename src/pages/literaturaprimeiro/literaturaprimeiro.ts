import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor'; 

@IonicPage()
@Component({
  selector: 'page-literaturaprimeiro',
  templateUrl: 'literaturaprimeiro.html',
})
export class LiteraturaprimeiroPage {

  literatura: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider) {
    this.getRetornar();
  }

  getRetornar(){
    this.servidor.getPegar_Literatura_Primeiro()
    .subscribe(
      data => this.literatura = data,
      err => {
        return console.log(err);
      }
    );
  }

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_Literatura_Primeiro().subscribe(
      data => {this.literatura = data;
      refresher.complete();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiteraturaprimeiroPage');
  }

}
