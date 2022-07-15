import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
})
export class FileComponent implements OnInit {
  constructor() {}

  uploadedFiles: any[] = [];

  ngOnInit(): void {}

  onUpload(event) {
    console.log('PPPPPPPPP ', event);
  }
}
