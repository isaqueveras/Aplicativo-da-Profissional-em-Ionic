import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

/**
 * Generated class for the HorariosextaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horariosexta',
  templateUrl: 'horariosexta.html',
})
export class HorariosextaPage {

  horarios: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servidor: ServidorProvider) {
    this.getRetornar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorariosextaPage');
  }

  getRetornar(){
    this.servidor.getPegar_Horario_Sexta()
    .subscribe(
     data => this.horarios = data,
     err => console.log(err) 
    )  
  };

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_Horario_Sexta().subscribe(
      data => {this.horarios = data;
      refresher.complete();
    });
  }

}
