import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 @Input() title: string = ''
 @Input() description: string = ''
 @Input() image: string = ''
  //public title: string
  ///public description: string
 // public image: string

  constructor() {
    //this.title = 'Card title'
    //this.description = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    //this.image = 'https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp'
  }

  ngOnInit(): void {
  }

}
