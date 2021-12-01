import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-pipes',
  template: `
    <h3>Async pipe</h3>
    <button (click)="getDate()">Request</button>
    <p>Response: {{ dataFromServer | async }}</p>
  `,
  styles: [],
})
export class AsyncPipesComponent implements OnInit {
  dataFromServer: Promise<string> | null = null;
  resolvePromise: Function = () => { };
  fail: Function = () => { }

  constructor() {
    this.dataFromServer = new Promise<string>((resolve, reject) => {
      this.resolvePromise = resolve;
      this.fail = reject;
    });
  }

  getDate() {
    if (this.resolvePromise) {
      setTimeout(() => {
        this.resolvePromise('Date from server');
      }, 1000);
    }
  }
  ngOnInit(): void {}
}
