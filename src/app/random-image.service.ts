import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from "rxjs/operators";

interface serviceResponse{
  urls:{
    full:string
  }
}

@Injectable({
  providedIn: 'root'
})
export class RandomImageService {

  constructor(private http:HttpClient) { }

  getRandomImage(){
    return this.http.get<serviceResponse>("https://api.unsplash.com/photos/random",
    {
      headers:{
        Authorization:"Client-ID 4l8C6w5dCUoNfsZpxdDXM4-C5YiaIRvFNVuCx5qmCe0"
      }
    })
    .pipe(
      pluck("urls","full")
    )
  }
}
