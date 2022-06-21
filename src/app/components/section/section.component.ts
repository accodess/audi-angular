import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() text1: string = ''
  @Input() text2: string = ''
  @Input() text3: string = ''
  @Input() image: string = ''
  @Input() isEven: boolean = false



  constructor() { }

  ngOnInit(): void {
  }

}
