import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multi-image-slider',
  templateUrl: './multi-image-slider.component.html',
  styleUrls: ['./multi-image-slider.component.css']
})
export class MultiImageSliderComponent {
  @Input()
  images :{source:string}[] = [{source:""}]
}
