import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-general-login',
  templateUrl: './general-login.component.html',
  styleUrls: ['./general-login.component.css']
})
export class GeneralLoginComponent implements OnInit {

  generalLogInData = {}

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  logInGeneral() {
    console.log(this.generalLogInData)
    this._auth.logInGeneral(this.generalLogInData)
      .subscribe(
        Response => {
          console.log(Response)
          localStorage.setItem('token', Response)
        },
        err => console.log(err)
      )
  }
}
