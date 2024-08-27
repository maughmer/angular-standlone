import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HelpService } from '../../help.service';

@Component({
  selector: 'app-things',
  standalone: true,
  imports: [],
  templateUrl: './things.component.html',
  styleUrl: './things.component.scss'
})
export class ThingsComponent implements AfterViewInit {

  @ViewChild('helpTemplate') helpTemplate!: TemplateRef<any>;

  constructor(
    private router: Router,
    private helpService: HelpService
  ) {}

  ngAfterViewInit(): void {
    this.helpService.add(this.router.url, this.helpTemplate);
  }

}
