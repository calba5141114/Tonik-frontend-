import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  //File-Upload URL
  private fileUploadService = 'http://localhost:5000/fileupload/audio-upload'

 ngOnInit() {
 }

 uploadFile (file) {
   return this.http.post<any>(this.fileUploadService, file)
 }

}
