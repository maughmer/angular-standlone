import { AfterViewInit, Component, HostListener, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatDrawerMode, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Subscription, tap } from 'rxjs';
import { EventService } from '../event.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatIconModule, MatListModule, MatNavList, MatSidenavModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  private subscriptions: Subscription[] = [];
  mode: MatDrawerMode = 'side';

  constructor(
    private eventService: EventService
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      let subscription = this.eventService.toggleNav$.pipe(
        tap(state => this.sideNav.toggle(state))
      ).subscribe();
      this.subscriptions.push(subscription);
      this.onResize();
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.mode = window.innerWidth > 551 ? 'side' : 'over';
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
