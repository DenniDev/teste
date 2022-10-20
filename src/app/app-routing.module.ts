import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'cardapio',
    loadChildren: () => import('./page/cardapio/cardapio.module').then( m => m.CardapioPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./page/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'promocoes',
    loadChildren: () => import('./page/promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },
  {
    path: 'sobre-nos',
    loadChildren: () => import('./page/sobre-nos/sobre-nos.module').then( m => m.SobreNosPageModule)
  },
  {
    path: 'acompanhar-pedido',
    loadChildren: () => import('./page/acompanhar-pedido/acompanhar-pedido.module').then( m => m.AcompanharPedidoPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
