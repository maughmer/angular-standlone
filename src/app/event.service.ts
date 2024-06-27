import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _authenticated = new BehaviorSubject(false);

  authenticated$ = this._authenticated.asObservable();

  set authenticated(value: boolean) {
    this._authenticated.next(value);
  }

}
