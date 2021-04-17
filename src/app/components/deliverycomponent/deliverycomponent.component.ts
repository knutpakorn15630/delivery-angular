import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;


@Component({
  selector: 'app-deliverycomponent',
  templateUrl: './deliverycomponent.component.html',
  styleUrls: ['./deliverycomponent.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class DeliverycomponentComponent implements OnInit {

  ngMember = {
    name: '',
    lastname: '',
    age: '',
    email: '',
    adress: '',
  };

  delivery = [
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
