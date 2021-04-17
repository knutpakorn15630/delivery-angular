import { Component, OnInit, } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
// tslint:disable-next-line:class-name

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css'],
  providers: [NgbModalConfig, NgbModal],
})

export class UsercomponentComponent implements OnInit {


  ngMember = {
    name: '',
    lastname: '',
    age: '',
    email: '',
    adress: '',
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

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  EmptyData() {
    this.ngMember = {
      name: '',
      lastname: '',
      age: '',
      email: '',
      adress: '',
    };
  }
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit(): void {
  }

}
