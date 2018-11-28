import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.css']
})
export class ListFileComponent implements OnInit {

  constructor(private uploadService: ServerService) { }

  ngOnInit() {
  }

  showFile = false;
  fileUploads: Observable<string[]>

  showFiles(enable: boolean) {
    this.showFile = enable;

    if(enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }

}
