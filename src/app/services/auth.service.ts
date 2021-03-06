import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Rx";
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //SIGN UP URLS
  private artistSignUpUrl = "http://localhost:5000/artist/signup"
  private generalSignUpUrl = "http://localhost:5000/donators/signup"

  //LOGIN URLS
  private artistLogInUrl = "http://localhost:5000/artist/login"
  private generalLogInUrl = "http://localhost:5000/donators/login"

  //USER INFO URL
  private artistInfoURL = "http://localhost:5000/artist/artistprofile/:email" 

  constructor(private http: HttpClient) { }

  //SIGNS UP ARTIST
  signUpArtist(user) {
    return this.http.post<any>(this.artistSignUpUrl, user) 
  }

  //SIGNS UP GENERAL
  signUpGeneral(user) {
    return this.http.post<any>(this.generalSignUpUrl, user)
  }

  //LOGS IN ARTIST
  logInArtist(user) {
    return this.http.post<any>(this.artistLogInUrl, user)
  }

  //LOGS IN GENERAL
  logInGeneral(user) {
    return this.http.post<any>(this.generalLogInUrl, user) 
  }

  //CHECKS USER LOGIN 
  loggedIn() {
    return !!localStorage.getItem('token')
  }

  //CHECKS ARTIST
  artistInfo (user) {
    return this.http.get<any>(this.artistInfoURL, user)
      // .map((Response:Response) => Response.json())
  }

}
