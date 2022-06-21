import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../models/card.model";
import {Carousel} from "../../models/carousel.model";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() carousels: Carousel[] = []



  constructor() { }

  ngOnInit(): void {
  }

}
