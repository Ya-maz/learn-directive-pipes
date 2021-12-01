import { Component} from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-async-observable',
  template: `
    <h3>Async pipe with Observable</h3>
    <button (click)="start()">Start</button>
    <p>{{ time | async }}</p>
  `,
  styles: [
  ]
})
export class AsyncObservableComponent {
  counter: number = 0;
  time: Observable<number> | null = null;

  start() {
    this.time = new Observable<number>((obsever: Subscriber<number>) => {
      setInterval(() => {
        obsever.next(this.counter++);
      }, 1000)
    })
  }
}
