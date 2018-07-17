import { createSelector } from '@ngrx/store';

export const selectAuthState = state => state.auth;

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => auth.loggedIn
);

export const isLoggeOut = createSelector(
  isLoggedIn,

  loggedIn = !loggedIn
)