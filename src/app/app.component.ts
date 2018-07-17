import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from './reducers/';
import { Logout} from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
      this.store.subscribe(state => console.log('state', state));

    }

    logout() {
      this.store.dispatch(new Logout());
    }


}
