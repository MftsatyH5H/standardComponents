import { Component } from '@angular/core';

@Component({
  selector: 'app-regis-system',
  templateUrl: './regis-system.component.html',
  styleUrls: ['./regis-system.component.css']
})
export class RegisSystemComponent {
  IdList: number[] = [1,2,3,4,5,6]  
  OutputList: number[] = []
  SelectedId :number | undefined
  onChangeValue(){
    if(this.SelectedId != undefined){
      //api request here
      this.OutputList.push(+this.SelectedId)
    }
    console.log(this.OutputList)
  }
}
