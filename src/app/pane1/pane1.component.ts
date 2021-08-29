import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pane1',
  templateUrl: './pane1.component.html',
  styleUrls: ['./pane1.component.scss']
})
export class Pane1Component implements OnInit {

  asDisplay: any;
  arr = new Array(10);

  showSearch = false;
  showPromptSearch = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      document.querySelector('.actual-search')?.addEventListener('focusout', () => {
        this.showPromptSearch = true;
        this.showSearch = false;
        console.log("out");
      })
    }, 1);
  }

  tog() {
    this.showSearch = true;
    this.showPromptSearch = false;
  }

}
