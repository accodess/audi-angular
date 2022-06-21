import { Component, OnInit } from '@angular/core';
import {Card} from "../../models/card.model";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public cards: Card[] = [
    {
      title: 'Title 1',
      description: 'Description 1',
      image: 'https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Title 2',
      description: 'Description 2',
      image: 'https://images.pexels.com/photos/10566897/pexels-photo-10566897.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Title 3',
      description: 'Description 3',
      image: 'https://images.pexels.com/photos/10566940/pexels-photo-10566940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Title 4',
      description: 'Description 4',
      image: 'https://images.pexels.com/photos/8022444/pexels-photo-8022444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
  ]

  constructor() {

  }

  ngOnInit(): void {
  }

}
