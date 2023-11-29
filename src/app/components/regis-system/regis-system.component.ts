import { Component } from '@angular/core';

@Component({
  selector: 'app-regis-system',
  templateUrl: './regis-system.component.html',
  styleUrls: ['./regis-system.component.css']
})
export class RegisSystemComponent {
  IdList: number[] = [1,2,3,4,5,6]  
  SelectedId!:number
  OutputUser!:{id:number, field1:string, field2:string, field3:string, prediction:string};
  onChangeValue(){
      //api request here
      this.OutputUser= {id:this.SelectedId, field1:'data', field2:'data', field3:'data', prediction:'data'}
  }
}
