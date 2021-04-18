import { Component, OnInit } from '@angular/core';
import { ReqTest, Root } from 'app/interfaces/api-test-1';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  ResTest: Root = null;

  ngName = {
    name: '',
    age: ''
  }
  constructor(private apiUserService: ApiService) { }


  // loadDataUser() {
  //   const body: ReqUserGets = {
  //     perPage: Number(this.ngData.perPages),
  //     page: this.ngData.page
  //   };

  //   this.apiUserService.getUser(body).subscribe(
  //     (resp) => {
  //       this.data = resp;
  //       // this.data.totalItems = body.perPage;
  //       this.SetPageTotal(this.data.totalPages);
  //       this.isReady = true;
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // }

  losdTest() {
    const body: ReqTest = {
      id: 2
    };
    this.apiUserService.getTest(body).subscribe(
      (res) => {
        this.ResTest = res;
        console.log('complet');
      }
    )
  }

  ngOnInit() {
  }

}
