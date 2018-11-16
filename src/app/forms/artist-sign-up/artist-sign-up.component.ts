import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-artist-sign-up',
  templateUrl: './artist-sign-up.component.html',
  styleUrls: ['./artist-sign-up.component.css']
})
export class ArtistSignUpComponent implements OnInit {
  
 artistSignUpData = {}
 
  constructor(private _auth: AuthService) { 

  }

  ngOnInit() {
    
  }

  signUpArtist() {
    console.log(this.artistSignUpData)
    this._auth.signUpArtist(this.artistSignUpData)
      .subscribe(
        Response => console.log(Response),
        err => console.log(err)
      )
  }
}
