import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserRegisterFormModel } from '../models/Request/UserRegisterFormModel';
import { UserLoginFormModel } from '../models/Request/UserLoginFormModel';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { LoginTokenModel } from '../models/Response/LoginTokenModel';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = environment.apiURL;
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  userLoginStatus: Observable<boolean> = this.isLoggedIn$.asObservable();

  constructor(private httpClient: HttpClient) { }

  registerUser(payload: UserRegisterFormModel) {
    let createUserUrl = `${this.apiUrl}Account/Create`
    return this.httpClient.post(createUserUrl, payload);
  }

  loginUser(payload: UserLoginFormModel): Observable<LoginTokenModel> {
    let createUserUrl = `${this.apiUrl}Account/Login`
    return this.httpClient.post<LoginTokenModel>(createUserUrl, payload).pipe(
      tap((response: LoginTokenModel) => {
        response.isLoggedIn = true;
        localStorage.setItem('data', JSON.stringify(response));
        this.isLoggedIn$.next(true);
      })
    );
  }

  checkLoggedInUser(): boolean{
    const token = localStorage.getItem('data') as string;
    const jwtToken = JSON.parse(token) as LoginTokenModel;    //call api with accessToken to confirm user
    if(jwtToken != null){
      return jwtToken.accessToken != null  && jwtToken.username != null && jwtToken.isLoggedIn;
    }
    return false;
  }

  logOut(): Observable<boolean>{
    //implement API logout function here
    localStorage.removeItem('data');
    return of(true);
  }
}
