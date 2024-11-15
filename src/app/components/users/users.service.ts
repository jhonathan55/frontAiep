import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _http=inject(HttpClient)
  private _url=environment.apiUrl
  constructor() { }

  createUser(user:any){
    return this._http.post(`${this._url}user`,user)
  }

}
