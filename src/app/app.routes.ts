import { Routes } from '@angular/router';

import { authGuard } from './auth.guard';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // lazy loading components
      { path: 'monsters', loadComponent: () => import('./home/monsters/monsters.component').then(mod => mod.MonstersComponent) },
      { path: 'races', loadComponent: () => import('./home/races/races.component').then(mod => mod.RacesComponent) },
    ],
    canActivate: [authGuard]
  },
  // temporarily disabling this as the secondary nav doesn't close when sidenav visibility is toggled.
  // should probably combine the navs into a router outlet.
  //
  // {
  //   path: '',
  //   // lazy loading component and children
  //   loadComponent: () => import('./home/stuff/stuff.component').then(mod => mod.StuffComponent),
  //   children: [
  //     { path: 'doodads', loadComponent: () => import('./home/stuff/doodads/doodads.component').then(mod => mod.DoodadsComponent) },
  //     { path: 'gizmos', loadComponent: () => import('./home/stuff/gizmos/gizmos.component').then(mod => mod.GizmosComponent) },
  //     { path: 'widgets', loadComponent: () => import('./home/stuff/widgets/widgets.component').then(mod => mod.WidgetsComponent) },
  //   ],
  //   canActivate: [authGuard]
  // },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];
