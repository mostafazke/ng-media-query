import { NgModule } from '@angular/core';
import { NgMediaQueryComponent } from './ng-media-query.component';
import { ShowInDirective } from './show-in.directive';
import { HideInDirective } from './hide-in.directive';

@NgModule({
  declarations: [NgMediaQueryComponent, ShowInDirective, HideInDirective],
  imports: [],
  exports: [NgMediaQueryComponent, ShowInDirective, HideInDirective],
})
export class NgMediaQueryModule {}
