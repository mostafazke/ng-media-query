import { Component } from '@angular/core';
import { BreakPoints } from 'projects/ng-media-query/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  breakPoints = BreakPoints;
  title = 'ng-mediaquery-showcase';
}
