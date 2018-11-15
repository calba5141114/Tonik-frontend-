import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //SIGN UP URLS
  private artistSignUpUrl = "http://localhost:3000/artist/signup"
  private generalSignUpUrl = "http://localhost:3000/donators/signup"

  //LOGIN URLS
  private artistLogInUrl = "http://localhost:3000/artist/login"
  private generalLogInUrl = "http://localhost:3000/donators/login"

  constructor(private http: HttpClient) { }

  //SIGNS UP ARTIST
  signUpArtist(user) {
    return this.http.post<any>(this.artistSignUpUrl, user) 
  }

  //SIGNS UP GENERAL
  signUpGeneral(user) {
    return this.http.post<any>(this.generalSignUpUrl, user)
  }

}
