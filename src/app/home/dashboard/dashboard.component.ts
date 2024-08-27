import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { HelpService } from '../../help.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('helpTemplate') helpTemplate!: TemplateRef<any>;

  constructor(
    private router: Router,
    private helpService: HelpService
  ) {}

  ngAfterViewInit(): void {
    this.helpService.add(this.router.url, this.helpTemplate);
  }

}
