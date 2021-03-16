import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor'; 

@IonicPage()
@Component({
  selector: 'page-literaturaterceiro',
  templateUrl: 'literaturaterceiro.html',
})
export class LiteraturaterceiroPage {

  literatura: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider) {
    this.getRetornar();
  }

  getRetornar(){
    this.servidor.getPegar_Literatura_Terceiro()
    .subscribe(
      data => this.literatura = data,
      err => {
        return console.log(err);
      }
    );
  }

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_Literatura_Terceiro().subscribe(
      data => {this.literatura = data;
      refresher.complete();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiteraturaTerceiroPage');
  }

}
