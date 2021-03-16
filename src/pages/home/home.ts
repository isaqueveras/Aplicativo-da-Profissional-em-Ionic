import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { LinguagensPage } from '../linguagens/linguagens';
import { ExatasPage } from '../exatas/exatas';
import { HumanasPage } from '../humanas/humanas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  items: Array<{title: string}>;
  conteudos_literatura: any;
  conteudos_exatas: any;
  conteudos_humanas: any;

  constructor(public navCtrl: NavController, public servidor: ServidorProvider, private platform: Platform) {
    this.getRetornar();
    this.items = [];
  }

  // Metodo de Sair
  logout(){
    this.platform.exitApp();
  }

  getRetornar(){
    this.servidor.getPegar_Globais_literatura()
    .subscribe(
     data => this.conteudos_literatura = data,
     err => console.log(err) 
    )
    this.servidor.getPegar_Globais_Exatas()
    .subscribe(
     data => this.conteudos_exatas = data,
     err => console.log(err) 
    )
    this.servidor.getPegar_Globais_Humanas()
    .subscribe(
     data => this.conteudos_humanas = data,
     err => console.log(err) 
    ) 
  };

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_Globais_literatura().subscribe(
      data => {this.conteudos_literatura = data;
      refresher.complete();
    });
    this.servidor.getPegar_Globais_Exatas().subscribe(
      data => {this.conteudos_exatas = data;
      refresher.complete();
    });
    this.servidor.getPegar_Globais_Humanas().subscribe(
      data => {this.conteudos_humanas = data;
      refresher.complete();
    });
  }

  itemLinguagens(event, items) {
    this.navCtrl.push(LinguagensPage, {
      item: items
    });
  }

  itemExatas(event, items) {
    this.navCtrl.push(ExatasPage, {
      item: items
    });
  }

  itemHumanas(event, items) {
    this.navCtrl.push(HumanasPage, {
      item: items
    });
  }

}