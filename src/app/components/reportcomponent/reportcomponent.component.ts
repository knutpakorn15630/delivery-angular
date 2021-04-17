import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-reportcomponent',
  templateUrl: './reportcomponent.component.html',
  styleUrls: ['./reportcomponent.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class ReportcomponentComponent implements OnInit {

  reportShop = [
    { nameShop: 'Eve', status: 'เปิด', namederivery: 'นาย ก', Adress: 'hsdaifhsadfhlsahflsahf', report: 'บริการดีมากครับ' },
    { nameShop: 'Eve', status: 'เปิด', namederivery: 'นาย ก', Adress: 'hsdaifhsadfhlsahflsahf', report: 'บริการดีมากครับ' },
    { nameShop: 'Eve', status: 'เปิด', namederivery: 'นาย ก', Adress: 'hsdaifhsadfhlsahflsahf', report: 'บริการดีมากครับ' },
    { nameShop: 'Eve', status: 'เปิด', namederivery: 'นาย ก', Adress: 'hsdaifhsadfhlsahflsahf', report: 'บริการดีมากครับ' },
    { nameShop: 'Eve', status: 'เปิด', namederivery: 'นาย ก', Adress: 'hsdaifhsadfhlsahflsahf', report: 'บริการดีมากครับ' },
    { nameShop: 'Eve', status: 'เปิด', namederivery: 'นาย ก', Adress: 'hsdaifhsadfhlsahflsahf', report: 'บริการดีมากครับ' },
    { nameShop: 'Eve', status: 'เปิด', namederivery: 'นาย ก', Adress: 'hsdaifhsadfhlsahflsahf', report: 'บริการดีมากครับ' },
    { nameShop: 'Eve', status: 'เปิด', namederivery: 'นาย ก', Adress: 'hsdaifhsadfhlsahflsahf', report: 'บริการดีมากครับ' },
    { nameShop: 'Eve', status: 'เปิด', namederivery: 'นาย ก', Adress: 'hsdaifhsadfhlsahflsahf', report: 'บริการดีมากครับ' },
    { nameShop: 'Eve', status: 'เปิด', namederivery: 'นาย ก', Adress: 'hsdaifhsadfhlsahflsahf', report: 'บริการดีมากครับ' },
    { nameShop: 'Eve', status: 'เปิด', namederivery: 'นาย ก', Adress: 'hsdaifhsadfhlsahflsahf', report: 'บริการดีมากครับ' }
  ]
  ngReport = {
    nameShop: '',
    statsu: '',
    namedarivery: '',
    adress: '',
    report: ''
  }

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  EmptyData() {
    this.ngReport = {
      nameShop: '',
      statsu: '',
      namedarivery: '',
      adress: '',
      report: ''
    }
  }

  openAddReport(addreport) {
    this.modalService.open(addreport, { size: 'lg' });
  }

  ngOnInit(): void {
  }

}
