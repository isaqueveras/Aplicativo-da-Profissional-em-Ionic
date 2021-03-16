import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

/**
 * Generated class for the HumanassegundoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-humanassegundo',
  templateUrl: 'humanassegundo.html',
})
export class HumanassegundoPage {

  humanas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider) {
    this.getRetornar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HumanassegundoPage');
  }

  getRetornar(){
    this.servidor.getPegar_Humanas_Segundo()
    .subscribe(
      data => this.humanas = data,
      err => {
        return console.log(err);
      }
    );
  }

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_Humanas_Segundo().subscribe(
      data => {this.humanas = data;
      refresher.complete();
    });
  }

}
