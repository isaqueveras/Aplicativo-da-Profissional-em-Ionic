import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

/**
 * Generated class for the HorarioquintaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horarioquinta',
  templateUrl: 'horarioquinta.html',
})
export class HorarioquintaPage {

  horarios: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servidor: ServidorProvider) {
    this.getRetornar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarioquintaPage');
  }

  getRetornar(){
    this.servidor.getPegar_Horario_Quinta()
    .subscribe(
     data => this.horarios = data,
     err => console.log(err) 
    )  
  };

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_Horario_Quinta().subscribe(
      data => {this.horarios = data;
      refresher.complete();
    });
  }

}
