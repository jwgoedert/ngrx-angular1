import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from './reducers/';
import { Logout} from './auth/auth.actions';
import { map } from 'rxjs/operators';

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
        map(state => state.auth.loggedIn)
      );

      this.isLoggedOut$ = this.store
        .pipe(
          map(state => !state.auth.loggedIn)
        );
      
        console.log('in', this.isLoggedIn$);
        console.log('out', this.isLoggedOut$);

    }

    logout() {
      this.store.dispatch(new Logout());
    }


}
