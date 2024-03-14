import { Route } from '@angular/router';

export const ROUTES_FACTORIZER: Route[] = [{
  // Main Module
  path: '',
  loadChildren: () => import('@module/factorizer/main').then(M => M.ROUTER_FACTORIZER_MODULE_MAIN)
}];
