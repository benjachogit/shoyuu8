import { Component, ElementRef } from '@angular/core';
import xkcd from '../assets/cropimg.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
  // styles: [ `
  //   ngui-in-view {
  //     min-height: 300px;
  //   }
  //   .num-images { 
  //     position: fixed; padding: 5px;
  //     bottom: 0; right: 0; background: #333;color: #fff;
  //   }` ]
})
export class AppComponent  {

  // mainmenu:any = xkcd;
  // get numImages(): number {
  //   return this.element.nativeElement.querySelectorAll('img').length;
  // }
  
  // numArr = Array.from(Array(100), (_,x) => x);

  

  constructor(public element: ElementRef) {
    // var bytes = xkcd[0].cropimg; // get from server
    // var uints = new Uint8Array(bytes);
    // var base64 = btoa(String.fromCharCode(null, uints));
    // var url = 'data:image/jpeg;base64,' + base64;

  }

}
