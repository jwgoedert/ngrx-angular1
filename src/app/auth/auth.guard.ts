import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';  
import { select, Store } from '@ngrx/store';
import { AppState } from '../reducers/';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isLoggedIn } from './auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate{ 
  constructor(private store: Store<AppState>, private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store
    .pipe(
      select(isLoggedIn),
      tap(loggedIn => {
        console.log('tap', loggedIn);
        if(!loggedIn) {
          this.router.navigateByUrl('/login')
        }
      })  
    );
    return undefined;
  }


}