import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _isAuthenticated: boolean = false;

  constructor(
    eventService: EventService
  ) {
    eventService.authenticated$.pipe(
      tap(authenticated => this._isAuthenticated = authenticated)
    ).subscribe();
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

}
