import { Component, OnInit } from '@angular/core';
import {Else} from "../../models/else.model";

@Component({
  selector: 'app-elses',
  templateUrl: './elses.component.html',
  styleUrls: ['./elses.component.scss']
})
export class ElsesComponent implements OnInit {
  public elses: Else [] = [
    {
      name: 'GitHub',
      link2: 'https://github.com/atsocma'
    },
    {
      name: 'Twitter',
      link2: 'https://github.com/atsocma'
    },
    {
      name: 'Facebook',
      link2: 'https://github.com/atsocma'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
