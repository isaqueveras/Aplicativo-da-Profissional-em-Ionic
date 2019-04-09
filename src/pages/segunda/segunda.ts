import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor'; 

@Component({
  selector: 'page-segunda',
  templateUrl: 'segunda.html'
})
export class SegundaPage {

  cardapio: any;

  constructor(public navCtrl: NavController, public servidor: ServidorProvider) {
    this.getRetornar();
  }

  getRetornar(){
    this.servidor.getPegar_segunda()
    .subscribe(
      data => this.cardapio = data,
      err => {
        return console.log(err);
      }
    );
  }

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_segunda().subscribe(
      data => {this.cardapio = data;
      refresher.complete();
    });
  }

}
