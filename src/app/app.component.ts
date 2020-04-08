import {Component, ViewEncapsulation} from '@angular/core';
import {slideInAnimation} from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [ slideInAnimation ]
})

export class AppComponent {
  title = 'WoodRock';
}
