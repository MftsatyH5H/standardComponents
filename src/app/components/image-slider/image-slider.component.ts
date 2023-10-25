import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  @Input()
  images :{source:string}[] = [{source:""}]
  validate(index:number): string{
    if(index = 0){
      return 'carousel-item active'
    }
    return 'carousel-item'
  }
} 
