import { AfterViewInit, Component, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Router } from '@angular/router';

import { Subscription, tap } from 'rxjs';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { EventService } from '../event.service';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [NgTemplateOutlet, MatIconModule, MatMenuModule, MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements AfterViewInit {

  helpTemplate!: TemplateRef<any>;

  private subscriptions: Subscription[] = [];
  isAuthenticated = false;
  isOpen = true;

  constructor(
    private router: Router,
    private eventService: EventService,
    private helpService: HelpService
  ) {}

  ngOnInit() {
    let subscription = this.eventService.authenticated$.pipe(
      tap(authenticated => this.isAuthenticated = authenticated)
    ).subscribe();
    this.subscriptions.push(subscription);
  }

  ngAfterViewInit(): void {
    let subscription = this.eventService.toggleNav$.pipe(
      tap(state => this.isOpen = state),
    ).subscribe();
    this.subscriptions.push(subscription);
  }

  toggleNav() {
    this.eventService.toggleNav();
  }

  login() {
    this.router.navigateByUrl('login');
  }

  onHelp() {
    const helpTemplate = this.helpService.get(this.router.url);
    if (helpTemplate) {
      this.helpTemplate = helpTemplate;
    }
  }

  logout() {
    this.router.navigateByUrl('/');
    this.eventService.authenticated = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
