import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqCreateUser, ResCreateUser } from 'app/interfaces/api-createuser';
import { ReqDeleteUser } from 'app/interfaces/api-deleteuser';
import { ReqLogins, ResLogins } from 'app/interfaces/api-login';
import { ReqToken, ResToken } from 'app/interfaces/api-rotoken';
import { ReqTest, Root } from 'app/interfaces/api-test-1';
import { Daum, ResShowUser } from 'app/interfaces/api-user';
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

  public getLogin(body: ReqLogins): Observable<ResLogins> {
    return this.httpClient.post<ResLogins>(`${this.apiUrl}/api/user/login`, body);
  }

  public reToken(body: ReqToken): Observable<ResToken> {
    return this.httpClient.post<ResToken>(`${this.apiUrl}/api/user/token`, body);
  }

  public showUser(): Observable<ResShowUser> {
    return this.httpClient.get<ResShowUser>(`${this.apiUrl}/api/user/get`);
  }

  public createUser(body: ReqCreateUser): Observable<ResCreateUser> {
    return this.httpClient.post<ResCreateUser>(`${this.apiUrl}/api/user/create`, body);
  }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/api/user/delete/${id}`);
  }
}
