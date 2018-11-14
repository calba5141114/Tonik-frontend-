import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-artist-sign-up',
  templateUrl: './artist-sign-up.component.html',
  styleUrls: ['./artist-sign-up.component.css']
})
export class ArtistSignUpComponent implements OnInit {
  
 signUpUserData = {}
  constructor(private _auth: AuthService) { 

  }

  ngOnInit() {
    
  }

  signUpUser() {
    console.log(this.signUpUserData)
    this._auth.registerUser(this.signUpUserData)
      .subscribe(
        Response => console.log(Response),
        err => console.log(err)
      )
  }
}
