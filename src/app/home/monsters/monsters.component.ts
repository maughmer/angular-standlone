import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { tap } from 'rxjs';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { ApiService } from '../../api.service';

interface Monster {
  name: string;
  ac: number;
  hp: number;
  cr: string;
}

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule],
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.scss'
})
export class MonstersComponent implements AfterViewInit {

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

  dataSource = new MatTableDataSource<Monster>();
  columns = ['name', 'ac', 'hp', 'cr'];

  constructor(
    private apiService: ApiService
  ) {}

  ngAfterViewInit(): void {
    this.apiService.getMonsters().pipe(
      tap(data => this.dataSource.data = data),
    ).subscribe();
  }

}
