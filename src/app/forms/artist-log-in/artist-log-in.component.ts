import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-artist-log-in',
  templateUrl: './artist-log-in.component.html',
  styleUrls: ['./artist-log-in.component.css']
})
export class ArtistLogInComponent implements OnInit {

  logInArtistData = {}

  constructor(private _auth: AuthService, private _ngZone: NgZone) { }

  ngOnInit() {
  }

  //Artist can login and redirects them to their profile 
  logInArtist() {
    console.log(this.logInArtistData)
    this._auth.logInArtist(this.logInArtistData)
      .subscribe(
        Response => {
          console.log(Response),
          localStorage.setItem('token', Response),
          this._ngZone.runOutsideAngular(() => {
            window.location.href = '/artist-profile'
          })
        },
        err => console.log(err, 'Error')
      )
  }


}
