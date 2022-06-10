import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit, OnChanges{

  constructor() { }

  ngOnInit(): void {
  }

  
// aliasing with name myCount
  @Input('myCount') count:number;

  ngOnChanges(changes:SimpleChanges){
    for(let property in changes){
      if(property==='count'){
        console.log('Previous: ', changes[property].previousValue);
        console.log('Current: ', changes[property].currentValue);
        console.log('First Change: ', changes[property].firstChange);
      }
    }
  }

}
