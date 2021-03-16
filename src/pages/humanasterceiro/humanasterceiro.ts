import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

@IonicPage()
@Component({
  selector: 'page-humanasterceiro',
  templateUrl: 'humanasterceiro.html',
})
export class HumanasterceiroPage {

  humanas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider) {
    this.getRetornar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HumanasterceiroPage');
  }

  getRetornar(){
    this.servidor.getPegar_Humanas_Terceiro()
    .subscribe(
      data => this.humanas = data,
      err => {
        return console.log(err);
      }
    );
  }

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_Humanas_Terceiro().subscribe(
      data => {this.humanas = data;
      refresher.complete();
    });
  }

}
