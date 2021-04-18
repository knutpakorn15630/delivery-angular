import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private IsLoginService: LoginService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(async (resolve, reject) => {
      // const loginTest2 = this.LoginSer.setLogin(this.loginTest);
      if (this.IsLoginService.getLogin()) {
        console.log('login success111');
        return resolve(true);
      } else {
        console.log('login fail');
        this.router.navigateByUrl('user');
      }
    });
  }

}
