import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  createUser(data: any):Observable<User>{
    const baseUrl="http://localhost:3000/user";
    return this.httpClient.post<User>(baseUrl, data);
  }

  getAllUsers():Observable<User>{
    const baseUrl="http://localhost:3000/user?_sort=rating&_order=desc";
    return this.httpClient.get<User>(baseUrl);
  }

}
