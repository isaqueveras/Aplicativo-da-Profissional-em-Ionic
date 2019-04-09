import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor'; 

@Component({
  selector: 'page-quarta',
  templateUrl: 'quarta.html'
})
export class QuartaPage {

  cardapio: any;

  constructor(public navCtrl: NavController, public servidor: ServidorProvider) {
    this.getRetornar();
  }

  getRetornar(){
    this.servidor.getPegar_quarta()
    .subscribe(
      data => this.cardapio = data,
      err => {
        return console.log(err);
      }
    );
  }

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_quarta().subscribe(
      data => {this.cardapio = data;
      refresher.complete();
    });
  }

} 
