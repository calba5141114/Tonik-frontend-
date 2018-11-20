import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-sign-up',
  templateUrl: './artist-sign-up.component.html',
  styleUrls: ['./artist-sign-up.component.css'],
})
export class ArtistSignUpComponent implements OnInit {
  
 artistSignUpData = {}
 
  constructor(private _auth: AuthService, 
              private router: Router,
              private _ngZone: NgZone
            ) { }

  ngOnInit() {
    
  }

  //Signs up and saves artist them redirects them to login
  signUpArtist() {
    console.log(this.artistSignUpData)
    this._auth.signUpArtist(this.artistSignUpData)
      .subscribe(
        Response => {
          console.log(Response)
          this._ngZone.runOutsideAngular(() => {
            window.location.href = '/artist-login'
          });
        },
        err => {
          console.log(err, 'Error')
        }
      )
  }


}
