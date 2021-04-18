import { Component, OnInit } from '@angular/core';
import { ReqToken, ResToken } from 'app/interfaces/api-rotoken';
import { ApiService } from 'app/services/api.service';
import { LoginService } from 'app/services/login.service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/user', title: 'สมาชิก', icon: 'person', class: '' },
  { path: '/report', title: 'รายงาน', icon: 'report', class: '' },
  { path: '/delivery', title: 'พนักงานส่ง', icon: 'delivery_dining', class: '' },
  { path: '/shop', title: 'ร้านค้า', icon: 'shopping_cart', class: '' },
  // { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  // { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
  // { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
  // { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
  { path: '/maps', title: 'แผนที่', icon: 'location_on', class: '' },
  { path: '/user-profile', title: 'sdkfljs', icon: 'location_on', class: '' }
  // { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  DataToken: ResToken = null

  constructor(private apiUserService: ApiService, private LoginSer: LoginService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    // setInterval(this.resetToken, 10000);
  }

  resetToken() {
    console.log('this test --->');
    const isTokens = this.LoginSer.getLogin()
    const body: ReqToken = {
      token: isTokens.refreshToken
    }
    this.apiUserService.reToken(body).subscribe(
      (res) => {
        this.DataToken = res;
        console.log('this token ------------------------>', res)
      },
      (err) => {
        console.log(err);
      }
    )
  }


  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
