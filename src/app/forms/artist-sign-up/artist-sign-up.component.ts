import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-artist-sign-up',
  templateUrl: './artist-sign-up.component.html',
  styleUrls: ['./artist-sign-up.component.css']
})
export class ArtistSignUpComponent implements OnInit {
  
  onSubmit(form: NgForm) {
    console.log(form)
  }
  constructor() { 

  }

  ngOnInit() {
    
  }

}
