import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-song',
  templateUrl: './upload-song.component.html',
  styleUrls: ['./upload-song.component.css']
})
export class UploadSongComponent implements OnInit {

  constructor(private uploadSong: ServerService) { }

  ngOnInit() {
  }

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  // upload() {
  //   this.progress.percentage = 0;

  //   this.currentFileUpload = this.selectedFiles.item(0);
  //   this.uploadSong.pushFileToS3(this.currentFileUpload)
  //     .subscribe(
  //       event => {
  //         if(event.type === HttpEventType.UploadProgress) {
  //           this.progress.percentage = Math.round(100 * event.loaded / event.total);
  //         } else if (event instanceof HttpResponse) {
  //           console.log('File Uploaded!')
  //         }
  //       }
  //     )

  //     this.selectedFiles = undefined;
  // }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)
    this.uploadSong.pushFileToS3(this.currentFileUpload).subscribe(event => {
      if(event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total)
      } else if(event instanceof HttpResponse) {
        console.log('File Uploaded');
      }
    })

    this.selectedFiles = undefined;

  }

//   selectFile() {
//     this.selec
//  }
}
