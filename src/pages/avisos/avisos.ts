import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

@Component({
  selector: 'page-avisos',
  templateUrl: 'avisos.html',
})
export class AvisosPage {
  avisos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider) {
    this.getRetornar();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AvisosPage');
  }

  getRetornar(){
    this.servidor.getPegar_avisos()
    .subscribe(
     data => this.avisos = data,
     err => console.log(err) 
    )  
  };

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_avisos().subscribe(
      data => {this.avisos = data;
      refresher.complete();
    });
  }

}
