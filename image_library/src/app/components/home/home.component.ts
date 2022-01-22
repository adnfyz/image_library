import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm : FormGroup;
  value = 'Clear me';
  hasSearched : boolean = false;
  isEmpty : boolean = false;

  photos = [];
  
  constructor(
    private _fb : FormBuilder,
    private requestService : RequestService
  ) { }

  ngOnInit() {
    this.initForm();
    this.getRandomPhotos();
  }

  initForm() {
    this.searchForm = this._fb.group({
      'keyword' : ['', Validators.required]
    })
  }
  getRandomPhotos(){
    this.requestService.listPhotos().subscribe(res => {
      console.log(res);
      this.photos = res
    })
  }

  getPhotosByKeyword() {
    console.log('Calling Unsplash API', this.searchForm.value.keyword);
    let keyword = this.searchForm.value.keyword
    this.requestService.getPhotosByKeyword(keyword).subscribe(res => {
      this.photos = res['results'];
    })
  }

  clearForm(){
    this.searchForm.patchValue({
      'keyword' : ''
    })
  }
}
