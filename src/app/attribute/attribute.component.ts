import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styles: [


  ]
})
export class AttributeComponent implements OnInit {
  currentColor: string = ""
  ngOnInit(): void {
    this.currentColor = "green"
  }
  onDelete() {
    console.log("onDelete called")
  }

}
