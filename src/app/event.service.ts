import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // default, not authenticated
  // default during dev, authenticated
  private _authenticated = new BehaviorSubject(false);
  // default, nav opened
  private _toggleNav = new BehaviorSubject(window.innerWidth > 551);

  authenticated$ = this._authenticated.asObservable();
  toggleNav$ = this._toggleNav.asObservable();

  set authenticated(value: boolean) {
    this._authenticated.next(value);
  }

  toggleNav() {
    this._toggleNav.next(!this._toggleNav.value);
  }

}
