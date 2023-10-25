import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'standardComponents';
  images: {source:string}[] =[
    {source:'https://www.gardeningknowhow.com/wp-content/uploads/2007/08/sunflowers-400x300.jpg'},
    {source:'https://tractive.com/blog/wp-content/uploads/2020/02/how-to-deal-with-panting-shaking-seizures-in-old-dogs-400x300.jpg'},
    {source: 'https://tractive.com/blog/wp-content/uploads/2016/04/puppy-care-guide-for-new-parents-400x300.jpg'},
    {source: 'https://www.cameralabs.com/wp-content/uploads/2017/11/best-mirrorless-image-400x300.jpg'}
  ] 
}
