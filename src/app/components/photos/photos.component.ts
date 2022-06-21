import { Component, OnInit } from '@angular/core';
import {Photo} from "../../models/photo.model";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  public photos: Photo[] = [
    {
      image: 'https://images.pexels.com/photos/971522/pexels-photo-971522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      image: 'https://images.pexels.com/photos/1005634/pexels-photo-1005634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      image: 'https://images.pexels.com/photos/6894427/pexels-photo-6894427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      image: 'https://images.pexels.com/photos/1005634/pexels-photo-1005634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      image: 'https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      image: 'https://images.pexels.com/photos/8022444/pexels-photo-8022444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      image: 'https://images.pexels.com/photos/10566897/pexels-photo-10566897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      image: 'https://images.pexels.com/photos/1005634/pexels-photo-1005634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
