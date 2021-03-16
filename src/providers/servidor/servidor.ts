import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServidorProvider {

  url: string = "";

  constructor(public http: Http) {
    console.log('Hello ServidorProvider Provider');
  }

  // Cardápio de Segunda
  getPegar_segunda(){
    return this.http.get(this.url+'segunda.php').pipe(map(res=> res.json()));
  }
  // Cardápio de Terça
  getPegar_terca(){
    return this.http.get(this.url+'terca.php').pipe(map(res=> res.json()));
  }
  // Cardápio de Quarta
  getPegar_quarta(){
    return this.http.get(this.url+'quarta.php').pipe(map(res=> res.json()));
  }
  // Cardápio de Quinta
  getPegar_quinta(){
    return this.http.get(this.url+'quinta.php').pipe(map(res=> res.json()));
  }
  // Cardápio de Sexta
  getPegar_sexta(){
    return this.http.get(this.url+'sexta.php').pipe(map(res=> res.json()));
  }

  // Avisos
  getPegar_avisos(){
    return this.http.get(this.url+'avisos.php').pipe(map(res=> res.json()));
  }

  // LITERATURA
  getPegar_Literatura_Primeiro(){
    return this.http.get(this.url+'literatura_primeiro.php').pipe(map(res=> res.json()));
  }
  getPegar_Literatura_Segundo(){
    return this.http.get(this.url+'literatura_segundo.php').pipe(map(res=> res.json()));
  }
  getPegar_Literatura_Terceiro(){
    return this.http.get(this.url+'literatura_terceiro.php').pipe(map(res=> res.json()));
  }

  // EXATAS
  getPegar_Exatas_Primeiro(){
    return this.http.get(this.url+'exatas_primeiro.php').pipe(map(res=> res.json()));
  }
  getPegar_Exatas_Segundo(){
    return this.http.get(this.url+'exatas_segundo.php').pipe(map(res=> res.json()));
  }
  getPegar_Exatas_Terceiro(){
    return this.http.get(this.url+'exatas_terceiro.php').pipe(map(res=> res.json()));
  }

  // HUMANAS
  getPegar_Humanas_Primeiro(){
    return this.http.get(this.url+'humanas_primeiro.php').pipe(map(res=> res.json()));
  }
  getPegar_Humanas_Segundo(){
    return this.http.get(this.url+'humanas_segundo.php').pipe(map(res=> res.json()));
  }
  getPegar_Humanas_Terceiro(){
    return this.http.get(this.url+'humanas_terceiro.php').pipe(map(res=> res.json()));
  }

  // Horário de Segunda-Feira
  getPegar_Horario_Segunda(){
    return this.http.get(this.url+'horarios_segunda.php').pipe(map(res=> res.json()));
  }
  // Horário de Terça-Feira
  getPegar_Horario_Terca(){
    return this.http.get(this.url+'horarios_terca.php').pipe(map(res=> res.json()));
  }
  // Horário de Quarta-Feira
  getPegar_Horario_Quarta(){
    return this.http.get(this.url+'horarios_quarta.php').pipe(map(res=> res.json()));
  }
  // Horário de Quinta-Feira
  getPegar_Horario_Quinta(){
    return this.http.get(this.url+'horarios_quinta.php').pipe(map(res=> res.json()));
  }
  // Horário de Sexta-Feira
  getPegar_Horario_Sexta(){
    return this.http.get(this.url+'horarios_sexta.php').pipe(map(res=> res.json()));
  }
  // Provas globais Literatura
  getPegar_Globais_literatura(){
    return this.http.get(this.url+'provas_globais_literatura.php').pipe(map(res=> res.json()));
  }
  // Provas globais Exatas
  getPegar_Globais_Exatas(){
    return this.http.get(this.url+'provas_globais_exatas.php').pipe(map(res=> res.json()));
  }
  getPegar_Globais_Humanas(){
    return this.http.get(this.url+'provas_globais_humanas.php').pipe(map(res=> res.json()));
  }

}
