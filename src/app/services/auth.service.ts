import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = signal(false);
  currentUser = signal('');

  login(username: string) {
    this.isLoggedIn.set(true);
    this.currentUser.set(username);
  }

  logout() {
    this.isLoggedIn.set(false);
    this.currentUser.set('');
  }
}

