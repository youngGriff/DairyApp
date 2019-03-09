import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static LOGIN_KEY = 'LOGIN_KEY';

  constructor() {
  }

  login(username: string, password: string) {
    if (username !== 'admin' && password !== 'admin') {
      return false;
    } else {
      localStorage.setItem(AuthService.LOGIN_KEY, String(true));
      return true;
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(AuthService.LOGIN_KEY);
  }
}
