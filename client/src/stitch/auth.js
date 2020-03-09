import {
  AnonymousCredential,
  UserPasswordCredential
} from 'mongodb-stitch-browser-sdk';
import { app } from './app.js';

export function loginAnonymous() {
  // Allow users to log in anonymously
  const credential = new AnonymousCredential();
  return app.auth.loginWithCredential(credential);
}

export async function loginUser(email, password) {
  // Allow users to log in with user/pw
  alert('stitch/auth');

  const credential = new UserPasswordCredential(email, password);
  let user;
  await app.auth
    .loginWithCredential(credential)
    .then(authedUser => {
      console.log(`successfully logged in with id: ${authedUser.id}`);
      user = authedUser;
    })
    .catch(err => console.error(`login failed with error: ${err}`));

  return user;
  // return app.auth.loginWithCredential(credential);
}

export function hasLoggedInUser() {
  // Check if there is currently a logged in user
  return app.auth.isLoggedIn;
}

export function getCurrentUser() {
  // Return the user object of the currently logged in user
  return app.auth.isLoggedIn ? app.auth.user : null;
}

export function logoutCurrentUser() {
  // Logout the currently logged in user
  const user = getCurrentUser();
  return app.auth.logoutUserWithId(user.id);
}
