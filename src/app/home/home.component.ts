import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatIconModule, MatListModule, MatNavList],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  expand(accordion: HTMLDivElement) {
    accordion.classList.replace('hidden', 'visible');
  }

  toggle(accordion: HTMLDivElement) {
    const list = accordion.classList;
    if (list.contains('visible')) {
      list.replace('visible', 'hidden');
    } else {
      list.replace('hidden', 'visible');
    }
  }

}
