import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription, tap } from 'rxjs';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { EventService } from '../event.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  private subscriptions: Subscription[] = [];
  isAuthenticated = false;

  constructor(
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit() {
    let subscription = this.eventService.authenticated$.pipe(
      tap(authenticated => this.isAuthenticated = authenticated)
    ).subscribe();
    this.subscriptions.push(subscription);
  }

  toggleNav() {
    this.eventService.toggleNav();
  }

  login() {
    this.router.navigateByUrl('login');
  }

  logout() {
    this.router.navigateByUrl('/');
    this.eventService.authenticated = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
