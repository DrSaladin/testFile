import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-create-edit',
  templateUrl: './file-create-edit.component.html',
  styleUrls: ['./file-create-edit.component.less']
})
export class FileCreateEditComponent implements OnInit {
  /** File */
  fileToUpload: File;

  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(): void {

  }
}
