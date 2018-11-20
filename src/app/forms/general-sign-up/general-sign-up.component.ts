import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-general-sign-up',
  templateUrl: './general-sign-up.component.html',
  styleUrls: ['./general-sign-up.component.css']
})
export class GeneralSignUpComponent implements OnInit {

  generalSignUpData = {}

  constructor(private _auth: AuthService, private _ngZone: NgZone)  { }


  ngOnInit() {
  }

  //Signs up general user and sends it to api and logs response
  signUpGeneral() {
    console.log(this.generalSignUpData)
    this._auth.signUpGeneral(this.generalSignUpData)
      .subscribe(
        Response => {
          console.log(Response)
          this._ngZone.runOutsideAngular(() => {
            window.location.href = '/general-login'
          }) 
        },
        err => {
          console.log(err, 'Error')
        }
      )
  }

  // signUpArtist() {
  //   console.log(this.artistSignUpData)
  //   this._auth.signUpArtist(this.artistSignUpData)
  //     .subscribe(
  //       Response => {
  //         console.log(Response)
  //         this._ngZone.runOutsideAngular(() => {
  //           window.location.href = '/artist-login'
  //         });
  //       },
  //       err => {
  //         console.log(err, 'Error')
  //       }
  //     )
  // }
}
