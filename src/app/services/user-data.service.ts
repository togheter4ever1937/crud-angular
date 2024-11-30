import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get(this.apiUrl);
  }
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }
  addUser(user: any) {
    const newUser = JSON.stringify(user);
    return this.http.post(this.apiUrl, newUser);
  }
  getUserById(userID: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userID}`);
  }
  updateUserInfo(userId: number, userInfo: any) {
    return this.http.put(`${this.apiUrl}/${userId}`, userInfo);
  }
  deleteAllUser() {
    return this.http.delete(this.apiUrl);
  }
}
