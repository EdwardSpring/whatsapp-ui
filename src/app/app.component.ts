import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'whatsapp-clone';
  width = 0;


  constructor() {



  }



  ngOnInit(): void {




    // document.querySelector('.actual-search')?.addEventListener('focusout', () => {
    //   console.log("out");

    // })



    // setInterval(() => {
    //   this.width == 100 ? '' : this.width += 20;

    //   console.log(this.width);
    // }, 1000);
    // let progress = document.querySelector('.progress');

    // progress.

  }

  getWidth() {
    setInterval(() => {
      return this.width += 3;
    }, 1000);
  }

}
