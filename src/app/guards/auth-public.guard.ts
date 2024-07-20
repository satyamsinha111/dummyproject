import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authPublicGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  if (localStorage.getItem("token")) {
    router.navigate(['user-profile'])
    return false;
  } else {
   
    return true;
  }
};
