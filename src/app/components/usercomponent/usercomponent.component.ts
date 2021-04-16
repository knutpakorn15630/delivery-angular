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
  ngtest = {
    name: ''
  }

  members = [
    { id: 2, name: 'Eve', lastname: 'sdfasg', age: 24, daycreate: 23 },
    { id: 2, name: 'Eve', lastname: 'sdfasg', age: 24, daycreate: 23 },
    { id: 2, name: 'Eve', lastname: 'sdfasg', age: 24, daycreate: 23 },
    { id: 2, name: 'Eve', lastname: 'sdfasg', age: 24, daycreate: 23 },
    { id: 2, name: 'Eve', lastname: 'sdfasg', age: 24, daycreate: 23 },
    { id: 2, name: 'Eve', lastname: 'sdfasg', age: 24, daycreate: 23 },
    { id: 2, name: 'Eve', lastname: 'sdfasg', age: 24, daycreate: 23 },
    { id: 2, name: 'Eve', lastname: 'sdfasg', age: 24, daycreate: 23 },
    { id: 2, name: 'Eve', lastname: 'sdfasg', age: 24, daycreate: 23 },
    { id: 2, name: 'Eve', lastname: 'sdfasg', age: 24, daycreate: 23 },
    { id: 2, name: 'Eve', lastname: 'sdfasg', age: 24, daycreate: 23 }
  ]
  ngCreate = {
    name: '',
    lastnaem: ''
  };
  constructor(private modalService: NgbModal) { }
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit(): void {
  }

}
