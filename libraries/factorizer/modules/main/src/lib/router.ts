import { Route } from '@angular/router';

export const ROUTER_FACTORIZER_MODULE_MAIN: Route[] = [{
  path: '',
  title: 'QuantAgile® Kairos Factorizer™',
  loadComponent: () => import('./main.component').then(C => C.MainComponent),
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'uniforge'
  }, {
    path: 'uniforge',
    title: 'QuantAgile® UniForge',
    loadComponent: () => import('@feature/factorizer/uniforge').then(C => C.UniforgeComponent)
  }]
}];
