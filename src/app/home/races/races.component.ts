import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HelpService } from '../../help.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../api.service';
import { Subscription, tap } from 'rxjs';

interface Race {
  name: string;
  size: string;
  speed: number;
  traits: string;
}

@Component({
  selector: 'app-things',
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule],
  templateUrl: './races.component.html',
  styleUrl: './races.component.scss'
})
export class RacesComponent implements AfterViewInit {

  @ViewChild('helpTemplate') helpTemplate!: TemplateRef<any>;

  private subscriptions: Subscription[] = [];

  //
  // our table and paginator will be hidden until we have data. once we
  // have data we can set our dataSource, which will in turn cause our
  // paginator to become visible. the setter below will then be called,
  // and we can assign our paginator to our dataSource.
  //
  @ViewChild(MatPaginator) set paginator(value: MatPaginator) {
    if (value) {
      this.dataSource.paginator = value;
    }
  }

  dataSource = new MatTableDataSource<Race>();
  columns = ['name', 'size', 'speed', 'traits'];

  constructor(
    private router: Router,
    private helpService: HelpService,
    private apiService: ApiService
  ) {}

  ngAfterViewInit(): void {
    const subscription = this.apiService.getRaces().pipe(
      tap(data => this.dataSource.data = data),
    ).subscribe();
    this.subscriptions.push(subscription);
    this.helpService.add(this.router.url, this.helpTemplate);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
