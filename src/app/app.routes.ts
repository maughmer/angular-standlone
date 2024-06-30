import { Routes } from '@angular/router';

import { authGuard } from './auth.guard';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ItemsComponent } from './home/items/items.component';
import { StuffComponent } from './home/stuff/stuff.component';
import { DoodadsComponent } from './home/stuff/doodads/doodads.component';
import { GizmosComponent } from './home/stuff/gizmos/gizmos.component';
import { WidgetsComponent } from './home/stuff/widgets/widgets.component';
import { ThingsComponent } from './home/things/things.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'things', component: ThingsComponent },
    ],
    canActivate: [authGuard]
  },
  {
    path: '',
    component: StuffComponent,
    children: [
      { path: 'doodads', component: DoodadsComponent },
      { path: 'gizmos', component: GizmosComponent },
      { path: 'widgets', component: WidgetsComponent },
    ],
  canActivate: [authGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];
