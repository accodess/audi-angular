import { Component, OnInit } from '@angular/core';
import {Carousel} from "../../models/carousel.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public carousels: Carousel[] = [
    {
      title: 'Slide 1',
      description: 'Description 1',
      image: 'https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Slide 2',
      description: 'Description 2',
      image: 'https://images.pexels.com/photos/10566897/pexels-photo-10566897.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Slide 3',
      description: 'Description 3',
      image: 'https://images.pexels.com/photos/8022444/pexels-photo-8022444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
