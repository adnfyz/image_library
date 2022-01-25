import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-download-image',
  templateUrl: './download-image.component.html',
  styleUrls: ['./download-image.component.css']
})
export class DownloadImageComponent implements OnInit {

 constructor(@Inject(MAT_DIALOG_DATA) public photo: any,
            private dialogRef: MatDialogRef<DownloadImageComponent>,
            private requestService: RequestService) {}

  ngOnInit() {
  }
  downloadImage(size : string) {
    switch (size) {
      case 'high':
        
        break;
      case 'medium':
      
        break;
    
      default:
        break;
    }
    this.closeDialog()
  }
  closeDialog() {
    this.dialogRef.close();
  }

}
