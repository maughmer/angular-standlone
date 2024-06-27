import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-stuff',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatIconModule, MatListModule, MatNavList],
  templateUrl: './stuff.component.html',
  styleUrl: './stuff.component.scss'
})
export class StuffComponent {

}
