import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  exibirCardapio(){
    this.navCtrl.navigateForward('cardapio');
  }

  exibirVacinacao(){
    this.navCtrl.navigateForward('eventos');
  }

  exibirOutras(){
    this.navCtrl.navigateForward('acompanhar-pedido');
  }
  exibirSobre(){
    this.navCtrl.navigateForward('sobre-nos');
  }


}
