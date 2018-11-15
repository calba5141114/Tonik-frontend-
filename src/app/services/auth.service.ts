import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signUpUrl = "http://localhost:3000/artist/signup"
  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this.signUpUrl, user) 
  }
}
