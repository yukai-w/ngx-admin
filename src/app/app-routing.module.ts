import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

// 因部署在netlify站点，有刷新问题。只能先使用hash路由
const ROUTER_CONFIG: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, ROUTER_CONFIG)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
