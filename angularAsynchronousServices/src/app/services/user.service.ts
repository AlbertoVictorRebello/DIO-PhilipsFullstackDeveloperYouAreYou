import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // users: Array<User> = [];
  // usersQuantity!: number;
  apiURL = "https://sheet.best/api/sheets/8fc4188c-50c7-40e2-bcb0-119fa634e63d";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL); 
  }

  getUserById(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${ this.apiURL}/id/${ id }`); 
  }

  // getUsersNumber(): void {
    
  //   this.getUsers().subscribe((response) => {
  //     this.usersQuantity = response.length;
  //   });
  // }

  postUser(user: User): Observable<User> { 
    // this.getUsersNumber();
    // console.log(this.usersQuantity)
    // user.id = this.usersQuantity + 1; 
    return this.httpClient.post<User>(this.apiURL, user, this.httpOptions)
  }
  
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${ this.apiURL }/id/${ id }`)

  }

  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${ this.apiURL}/id/${ id }`, user, this.httpOptions);


  }
}

