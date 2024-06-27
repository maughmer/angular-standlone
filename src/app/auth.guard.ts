import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AppService } from './app.service';

export const authGuard: CanActivateFn = (route, state) => {
  const appService = inject(AppService);
  const router = inject(Router);

  if (appService.isAuthenticated) {
    return true;
  }

  return router.navigateByUrl('');
};
