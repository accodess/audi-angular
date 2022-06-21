import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-else',
  templateUrl: './else.component.html',
  styleUrls: ['./else.component.scss']
})
export class ElseComponent implements OnInit {
  @Input() name: string = ''
  @Input() link2: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
