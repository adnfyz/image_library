import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-download-image',
  templateUrl: './download-image.component.html',
  styleUrls: ['./download-image.component.css']
})
export class DownloadImageComponent implements OnInit {

 constructor(@Inject(MAT_DIALOG_DATA) public photo: any,
            private requestService: RequestService) {}

  ngOnInit() {
  }
  download(size : string) {
    this.requestService
    switch (size) {
      case 'value':
        
        break;
    
      default:
        break;
    }
  }

}
