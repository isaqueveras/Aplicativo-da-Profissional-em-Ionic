import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AvisosPage } from '../avisos/avisos';
import { CardapioPage } from '../cardapio/cardapio';
import { HorariosPage } from '../horarios/horarios';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CardapioPage;
  tab3Root = HorariosPage;
  tab4Root = AvisosPage;

  constructor() {

  }
}
