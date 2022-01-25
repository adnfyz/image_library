import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RequestService } from 'src/app/services/request.service';
import { DownloadImageComponent } from '../download-image/download-image.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  value = 'Clear me';
  hasSearched: boolean = false;
  isEmpty: boolean = false;
  currentPage = 1;

  photos = [];

  constructor(
    private _fb: FormBuilder,
    private requestService: RequestService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.initForm();
    this.getRandomPhotos();
  }

  initForm() {
    this.searchForm = this._fb.group({
      'keyword': ['', Validators.required]
    })
  }
  getRandomPhotos() {
    this.requestService.listPhotos(this.currentPage).subscribe(res => {
      this.photos = [...this.photos , ...res]
      // console.log(this.photos)
    })
  }

  getPhotosByKeyword() {
    let keyword = this.searchForm.value.keyword
    if (!keyword) {
      return;
    }
    this.requestService.getPhotosByKeyword(keyword, this.currentPage).subscribe(res => {
      this.photos = res['results'];
      this.photos = [...this.photos , ...res['results']]
      // console.log(this.photos)
    })
  }

  clearForm() {
    this.searchForm.patchValue({
      'keyword': ''
    })
  }
  openDialog(photo: any) {
    console.log(photo);
    const dialogRef = this.matDialog.open(DownloadImageComponent, {
      data: photo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onScrollDown() {
    this.currentPage++;
    let keyword = this.searchForm.value.keyword
    if (!keyword) {
      this.getRandomPhotos();
      return;
    }
    this.getPhotosByKeyword();
  }
}
