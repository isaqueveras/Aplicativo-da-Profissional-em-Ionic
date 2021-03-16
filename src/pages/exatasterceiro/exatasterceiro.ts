import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

@IonicPage()
@Component({
  selector: 'page-exatasterceiro',
  templateUrl: 'exatasterceiro.html',
})
export class ExatasterceiroPage {

  exatas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider) {
    this.getRetornar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExatasterceiroPage');
  }

  getRetornar(){
    this.servidor.getPegar_Exatas_Terceiro()
    .subscribe(
      data => this.exatas = data,
      err => {
        return console.log(err);
      }
    );
  }

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_Exatas_Terceiro().subscribe(
      data => {this.exatas = data;
      refresher.complete();
    });
  }

  

}
