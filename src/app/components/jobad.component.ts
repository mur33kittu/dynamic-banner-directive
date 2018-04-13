import { Component, Input } from '@angular/core';

import { AdComponent }      from './ad.component';

@Component({
  template: `
    <div class="job-ad" highlight [incolor]="'green'">
      <h4 highlight [incolor]="'yellow'">{{data.headline | shorten}}</h4> 
      
      {{data.body}}
    </div>
  `
})
export class JobAdComponent implements AdComponent {
  @Input() data: any;

}

