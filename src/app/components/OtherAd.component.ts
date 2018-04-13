import { Component, Input }  from '@angular/core';

import { AdComponent }       from './ad.component';

@Component({
  template: `
    <div class="other-ad"  highlight [incolor]="'blue'">
      <h3  highlight [incolor]="'lightpink'">Featured Other Services</h3>
      <h4  highlight [incolor]="'skyblue'">{{data.name}}</h4>
      
      <p>{{data.bio}}</p>

      <strong  highlight [incolor]="'cyan'">Show your Ad today!</strong>
    </div>
  `
})
export class OtherAdComponent implements AdComponent {
  @Input() data: any;
}
