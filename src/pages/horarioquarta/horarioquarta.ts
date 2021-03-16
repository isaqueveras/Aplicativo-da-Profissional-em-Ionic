import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

@IonicPage()
@Component({
  selector: 'page-horarioquarta',
  templateUrl: 'horarioquarta.html',
})
export class HorarioquartaPage {

  horarios: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider) {
    this.getRetornar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarioquartaPage');
  }

  getRetornar(){
    this.servidor.getPegar_Horario_Quarta()
    .subscribe(
     data => this.horarios = data,
     err => console.log(err) 
    )  
  };

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_Horario_Quarta().subscribe(
      data => {this.horarios = data;
      refresher.complete();
    });
  }

}
