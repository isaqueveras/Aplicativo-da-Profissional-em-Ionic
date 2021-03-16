import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

@IonicPage()
@Component({
  selector: 'page-horarioterca',
  templateUrl: 'horarioterca.html',
})
export class HorariotercaPage {

  horarios: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider) {
    this.getRetornar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorariotercaPage');
  }

  getRetornar(){
    this.servidor.getPegar_Horario_Terca()
    .subscribe(
     data => this.horarios = data,
     err => console.log(err) 
    )  
  };

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_Horario_Terca().subscribe(
      data => {this.horarios = data;
      refresher.complete();
    });
  }

}
