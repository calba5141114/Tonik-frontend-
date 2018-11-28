import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  // logInArtist() {
  //   console.log(this.logInArtistData)
  //   this._auth.logInArtist(this.logInArtistData)
  //     .subscribe(
  //       Response => {
  //         console.log(Response),
  //         localStorage.setItem('token', Response),
  //         this._ngZone.runOutsideAngular(() => {
  //           window.location.href = '/artist-profile'
  //         })
  //       },
  //       err => console.log(err, 'Error')
  //     )
  // }

  showArtistInfo(user) {
    console.log(this._auth.artistInfo)
    this._auth.artistInfo(user)
      .subscribe(
        Response => Response,
        err => console.log(err)
      )
  }

}
