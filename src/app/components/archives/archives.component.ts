import { Component, OnInit } from '@angular/core';
import {Archive} from "../../models/archive.model";

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {
  public archives: Archive [] = [
    {
      date: 'March 2014',
      link: 'blog'
    },
    {
      date: 'April 2014 ',
      link: 'blog'
    },
    {
      date: 'November 2014',
      link: 'blog'
    },
    {
      date: 'December 2014',
      link: 'blog'
    },
    {
      date: 'January 2015',
      link: 'blog'
    },
    {
      date: 'February 2015',
      link: 'blog'
    },
    {
      date: 'March 2015',
      link: 'blog'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
