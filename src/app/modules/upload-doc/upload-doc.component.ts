import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoUploadFileRestrictions } from '@po-ui/ng-components';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload-doc',
  templateUrl: './upload-doc.component.html',
  styleUrls: ['./upload-doc.component.css'],
})
export class UploadDocComponent implements OnInit {
  public formUpload: FormGroup = new FormGroup({
    menu: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
  });

  public fileRestrictions: PoUploadFileRestrictions = {
    allowedExtensions: ['.json', '.yaml'],
    maxFileSize: 1000000,
  };

  constructor() {}

  ngOnInit(): void {}
}
