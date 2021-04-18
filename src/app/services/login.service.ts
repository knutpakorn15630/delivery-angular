import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  DataToken: ResLogin = null
  constructor() { }

  getLogin() {
    return this.DataToken
  }

  setLogin(res: ResLogin) {
    this.DataToken = res;
    console.log('service ', res)
    localStorage.setItem('login', JSON.stringify(this.DataToken));
  }

  clearLogin() {

  }
}

export interface ResLogin {
  accessToken: string
  refreshToken: string
}


