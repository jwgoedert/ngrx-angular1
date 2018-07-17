import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from './reducers/';
import { Logout} from './auth/auth.actions';
import { map } from 'rxjs/operators';
import { isLoggedIn, isLoggeOut } from './auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;


    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
      this.store.subscribe(state => console.log('state', state));

      this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );

      this.isLoggedOut$ = this.store
        .pipe(
          select(isLoggeOut)
        );
    }

    logout() {
      this.store.dispatch(new Logout());
    }


}
