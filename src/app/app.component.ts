import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'standardComponents';
  images: {source:string}[] =[
    {source:'https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg'},
    {source:'https://img.freepik.com/premium-vector/colorful-abstract-letter-logo-design_474888-2412.jpg'},
    {source: 'https://png.pngtree.com/template/20190418/ourmid/pngtree-a-letter-swoosh-logo-template-image_131370.jpg'},
    {source: 'https://img.freepik.com/vektoren-kostenlos/bunte-vogelillustrationssteigung_343694-1741.jpg'},
    {source: 'https://img.freepik.com/premium-vector/colorful-abstract-letter-logo-design_474888-2412.jpg'},
    {source: 'https://png.pngtree.com/png-clipart/20200709/original/pngtree-illustration-of-poly-bird-logo-design-template-vector-png-image_3629947.jpg'},
    {source: 'https://img.freepik.com/premium-vector/dancing-fish-logo-designs_94202-135.jpg'}
  ] 
}
