import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReqCreateUser } from 'app/interfaces/api-createuser';
import { ReqDeleteUser } from 'app/interfaces/api-deleteuser';
import { ReqToken, ResToken } from 'app/interfaces/api-rotoken';
import { ResShowUser } from 'app/interfaces/api-user';
import { ApiService } from 'app/services/api.service';
import { LoginService } from 'app/services/login.service';
import Swal from 'sweetalert2';
declare var $: any;
// tslint:disable-next-line:class-name

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css'],
  providers: [NgbModalConfig, NgbModal],
})

export class UsercomponentComponent implements OnInit {
  DataToken: ResToken = null
  DataUser: ResShowUser;


  ngMember = {
    name: '',
    lastName: '',
    user: '',
    pass: '',
  };

  members = [
    { name: 'Eve', lastname: 'sdfasg', age: 24, email: 'asjflkjsaf656@gmail.com', Adress: 'hsdaifhsadfhlsahflsahf' },
    { name: 'Eve', lastname: 'sdfasg', age: 24, email: 'asjflkjsaf656@gmail.com', Adress: 'hsdaifhsadfhlsahflsahf' },
    { name: 'Eve', lastname: 'sdfasg', age: 24, email: 'asjflkjsaf656@gmail.com', Adress: 'hsdaifhsadfhlsahflsahf' },
    { name: 'Eve', lastname: 'sdfasg', age: 24, email: 'asjflkjsaf656@gmail.com', Adress: 'hsdaifhsadfhlsahflsahf' },
    { name: 'Eve', lastname: 'sdfasg', age: 24, email: 'asjflkjsaf656@gmail.com', Adress: 'hsdaifhsadfhlsahflsahf' },
    { name: 'Eve', lastname: 'sdfasg', age: 24, email: 'asjflkjsaf656@gmail.com', Adress: 'hsdaifhsadfhlsahflsahf' },
    { name: 'Eve', lastname: 'sdfasg', age: 24, email: 'asjflkjsaf656@gmail.com', Adress: 'hsdaifhsadfhlsahflsahf' },
    { name: 'Eve', lastname: 'sdfasg', age: 24, email: 'asjflkjsaf656@gmail.com', Adress: 'hsdaifhsadfhlsahflsahf' },
    { name: 'Eve', lastname: 'sdfasg', age: 24, email: 'asjflkjsaf656@gmail.com', Adress: 'hsdaifhsadfhlsahflsahf' },
    { name: 'Eve', lastname: 'sdfasg', age: 24, email: 'asjflkjsaf656@gmail.com', Adress: 'hsdaifhsadfhlsahflsahf' },
    { name: 'Eve', lastname: 'sdfasg', age: 24, email: 'asjflkjsaf656@gmail.com', Adress: 'hsdaifhsadfhlsahflsahf' }
  ]

  optionDel: any = {
    title: 'Are you sure?',
    text: 'You wont be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  };

  // tslint:disable-next-line:max-line-length
  constructor(config: NgbModalConfig, private modalService: NgbModal, private apiUserService: ApiService, private LoginSer: LoginService, private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.loadDataUser()
  }

  EmptyData() {
    this.ngMember = {
      name: '',
      lastName: '',
      user: '',
      pass: '',
    };
  }
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  loadDataUser() {
    this.apiUserService.showUser().subscribe(
      (res) => {
        this.DataUser = res;
        console.log('this is log ------>>>', this.DataUser.data)
      }
    )
  }

  showModal() {
    $('#myModal').modal('show');
  }

  hideModal() {
    $('#myModal').modal('hide')
  }

  createUer() {
    const body: ReqCreateUser = {
      firstName: this.ngMember.name,
      lastName: this.ngMember.lastName,
      userName: this.ngMember.user,
      password: this.ngMember.pass
    }
    if (!this.ngMember.name || !this.ngMember.lastName || !this.ngMember.pass || !this.ngMember.user) {
      Swal.fire({
        icon: 'warning',
        title: 'กรุณากรอกข้อมูลให้ครบ!',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    } else {
      this.apiUserService.createUser(body).subscribe(
        (res) => {
          this.loadDataUser();
          $('#myModal').modal('hide')
          this.EmptyData();
        }
      )
    }

  }

  deleteUser(id: number) {
    this.apiUserService.deleteUser(id).subscribe(
      (res) => {
        console.log('this is success')
      },
      (err) => {
        this.loadDataUser()
        console.log(err)
      }
    )
  }


}

