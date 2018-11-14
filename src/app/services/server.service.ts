import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

 ngOnInit() {
  let obs = this.http.get('http://localhost:3000/artistsignup')
    obs.subscribe((response) => console.log(response));
 }


}
