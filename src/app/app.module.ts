import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SegundaPage } from '../pages/segunda/segunda';
import { TercaPage } from '../pages/terca/terca';
import { QuartaPage } from '../pages/quarta/quarta';
import { QuintaPage } from '../pages/quinta/quinta';
import { SextaPage } from '../pages/sexta/sexta';
import { ServidorProvider } from '../providers/servidor/servidor';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { LinguagensPage } from '../pages/linguagens/linguagens';
import { LiteraturaprimeiroPage } from '../pages/literaturaprimeiro/literaturaprimeiro';
import { LiteraturasegundaPage } from '../pages/literaturasegundo/literaturasegunda';
import { LiteraturaterceiroPage } from '../pages/literaturaterceiro/literaturaterceiro';
import { ExatasPage } from '../pages/exatas/exatas';
import { ExatasprimeiroPage } from '../pages/exatasprimeiro/exatasprimeiro';
import { ExatassegundoPage } from '../pages/exatassegundo/exatassegundo';
import { ExatasterceiroPage } from '../pages/exatasterceiro/exatasterceiro';
import { HumanasPage } from '../pages/humanas/humanas';
import { HumanasprimeiroPage } from '../pages/humanasprimeiro/humanasprimeiro';
import { HumanassegundoPage } from '../pages/humanassegundo/humanassegundo';
import { HumanasterceiroPage } from '../pages/humanasterceiro/humanasterceiro';
import { AvisosPage } from '../pages/avisos/avisos';
import { CardapioPage } from '../pages/cardapio/cardapio';
import { HorariosPage } from '../pages/horarios/horarios';
import { HorariosegundaPage } from '../pages/horariosegunda/horariosegunda';
import { HorariotercaPage } from '../pages/horarioterca/horarioterca';
import { HorarioquartaPage } from '../pages/horarioquarta/horarioquarta';
import { HorarioquintaPage } from '../pages/horarioquinta/horarioquinta';
import { HorariosextaPage } from '../pages/horariosexta/horariosexta';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LinguagensPage,
    LiteraturaprimeiroPage,
    LiteraturasegundaPage,
    SegundaPage,
    TercaPage,
    QuartaPage,
    QuintaPage,
    SextaPage,
    AvisosPage,
    LiteraturaterceiroPage,
    ExatasPage,
    ExatasprimeiroPage,
    ExatassegundoPage,
    ExatasterceiroPage,
    HumanasPage,
    HumanasprimeiroPage,
    HumanassegundoPage,
    HumanasterceiroPage,
    CardapioPage,
    HorariosPage,
    HorariosegundaPage,
    HorariotercaPage,
    HorarioquartaPage,
    HorarioquintaPage,
    HorariosextaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LinguagensPage,
    LiteraturaprimeiroPage,
    LiteraturasegundaPage,
    SegundaPage,
    TercaPage,
    QuartaPage,
    QuintaPage,
    SextaPage,
    AvisosPage,
    LiteraturaterceiroPage,
    ExatasPage,
    ExatasprimeiroPage,
    ExatassegundoPage,
    ExatasterceiroPage,
    HumanasPage,
    HumanasprimeiroPage,
    HumanassegundoPage,
    HumanasterceiroPage,
    CardapioPage,
    HorariosPage,
    HorariosegundaPage,
    HorariotercaPage,
    HorarioquartaPage,
    HorarioquintaPage,
    HorariosextaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServidorProvider
  ]
})
export class AppModule {}
