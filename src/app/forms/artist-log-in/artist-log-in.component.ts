import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-artist-log-in',
  templateUrl: './artist-log-in.component.html',
  styleUrls: ['./artist-log-in.component.css']
})
export class ArtistLogInComponent implements OnInit {

  logInArtistData = {}

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  logInArtist() {
    console.log(this.logInArtistData)
    this._auth.logInArtist(this.logInArtistData)
      .subscribe(
        Response => console.log(Response),
        err => console.log(err),
      )
  }
}
