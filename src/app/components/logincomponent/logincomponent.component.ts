import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ReqLogins, ResLogins } from 'app/interfaces/api-login';
import { ApiService } from 'app/services/api.service';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
  DataLogin: ResLogins = null

  input = {
    input1: {
      isFocus: false,
      text: '',
    },
    input2: {
      isFocus: false,
      text: '',
    },
  };

  LoginCreate = {
    UserName: '',
    password: '',
  };

  constructor(private apiUserService: ApiService, private LoginSer: LoginService, private router: Router) { }

  Logined() {
    const body: ReqLogins = {
      userName: this.LoginCreate.UserName,
      password: this.LoginCreate.password
    }
    this.apiUserService.getLogin(body).subscribe(
      (res) => {
        this.DataLogin = res;
        if (!res) {
          console.log('loin fail');
        } else {
          console.log('datalogin', this.DataLogin)
          this.router.navigateByUrl('user');
          this.LoginSer.setLogin(this.DataLogin)
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
