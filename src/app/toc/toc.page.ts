import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {

  public pages = [
    {
      title: "Chapter 1 | Principium",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Secundus",
      url: "/chapter2"
    },
    {
      title: "Chapter 3 | Tribus",
      url: "/chapter3"
    },
    {
      title: "Chapter 4 | Semi Finalem",
      url: "/chapter4"
    },
    {
      title: "Chapter 5 | Terminus",
      url: "/chapter5"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
