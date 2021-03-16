import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { HorariosegundaPage } from '../horariosegunda/horariosegunda';
import { HorariotercaPage } from '../horarioterca/horarioterca';
import { HorariosextaPage } from '../horariosexta/horariosexta';
import { HorarioquintaPage } from '../horarioquinta/horarioquinta';
import { HorarioquartaPage } from '../horarioquarta/horarioquarta';

@IonicPage()
@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html',
})
export class HorariosPage {
  
  horarios: any;
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider) {
    this.getRetornar();
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HorariosPage');
  }
  getRetornar(){
    this.servidor.getPegar_avisos()
    .subscribe(
     data => this.horarios = data,
     err => console.log(err) 
    )  
  };

  doRefresh(refresher){
    console.log('begin async operation', refresher)
    this.servidor.getPegar_avisos().subscribe(
      data => {this.horarios = data;
      refresher.complete();
    });
  }

  itemSegunda(event, items) {
    this.navCtrl.push(HorariosegundaPage, {
      item: items
    });
  }

  itemTerca(event, items) {
    this.navCtrl.push(HorariotercaPage, {
      item: items
    });
  }

  itemQuarta(event, items) {
    this.navCtrl.push(HorarioquartaPage, {
      item: items
    });
  }

  itemQuinta(event, items) {
    this.navCtrl.push(HorarioquintaPage, {
      item: items
    });
  }

  itemSexta(event, items) {
    this.navCtrl.push(HorariosextaPage, {
      item: items
    });
  }

}
