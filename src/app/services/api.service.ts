import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqTest, Root } from 'app/interfaces/api-test-1';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.coreApi;

  constructor(private httpClient: HttpClient) { }

  public getTest(body: ReqTest): Observable<Root> {
    return this.httpClient.post<Root>(`${this.apiUrl}/api/member/showNewForm`, body);
  }
}
