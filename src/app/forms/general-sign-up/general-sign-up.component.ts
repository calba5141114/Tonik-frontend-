import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-general-sign-up',
  templateUrl: './general-sign-up.component.html',
  styleUrls: ['./general-sign-up.component.css']
})
export class GeneralSignUpComponent implements OnInit {

  generalSignUpData = {}

  constructor(private _auth: AuthService)  { }


  ngOnInit() {
  }

  //Signs up general user and sends it to api and logs response
  signUpGeneral() {
    console.log('This is the user ' + this.generalSignUpData)
    this._auth.signUpGeneral(this.generalSignUpData)
      .subscribe(
        Response => console.log(Response),
        err => console.log(err)
      )
  }
}
