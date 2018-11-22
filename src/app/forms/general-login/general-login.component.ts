import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-general-login',
  templateUrl: './general-login.component.html',
  styleUrls: ['./general-login.component.css']
})
export class GeneralLoginComponent implements OnInit {

  generalLogInData = {}

  constructor(private _auth: AuthService, private _ngZone: NgZone) { }

  ngOnInit() {
  }

  //logs in general user an redirects them to profile page
  logInGeneral() {
    console.log(this.generalLogInData)
    this._auth.logInGeneral(this.generalLogInData)
      .subscribe(
        Response => {
          console.log(Response)
          localStorage.setItem('token', Response.token),
          this._ngZone.runOutsideAngular(() => {
            window.location.href = '/general-profile'
          });
        },
        err => console.log(err)
      )
  }
}
