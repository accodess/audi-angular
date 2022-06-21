import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() title: string = ''
  @Input() date: string  = ''
  @Input() text1: string = ''
  @Input() text2: string = ''
  @Input() text3: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
