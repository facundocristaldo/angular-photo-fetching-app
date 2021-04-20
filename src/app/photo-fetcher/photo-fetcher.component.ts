import { Component, OnInit } from '@angular/core';
import { RandomImageService } from '../random-image.service';

@Component({
  selector: 'app-photo-fetcher',
  templateUrl: './photo-fetcher.component.html',
  styleUrls: ['./photo-fetcher.component.css']
})
export class PhotoFetcherComponent implements OnInit {
  imageSrc=""
  constructor(private imageServide:RandomImageService) { }

  ngOnInit(): void {
  }
  getImage(){
    this.imageServide.getRandomImage().subscribe((response)=>{
      this.imageSrc = response
    })
  }
}
