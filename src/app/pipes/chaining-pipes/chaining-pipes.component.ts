import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaining-pipes',
  template: `
    <p>
    Today: 
      <b>{{creationDate | date: "fullDate" | uppercase}}</b>
    </p>
  `,
  styles: [
  ]
})
export class ChainingPipesComponent  {

 creationDate: Date = new Date()
}
