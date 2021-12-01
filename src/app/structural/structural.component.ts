import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styles: [
  ]
})
export class StructuralComponent implements OnInit {
  visible: boolean = false;

  changeVisibility() {
    console.log("change")
    this.visible=!this.visible
  }
  constructor() { }

  ngOnInit(): void {
  }

}
