import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [],
})
export class PipesComponent implements OnInit {
  // value: Event;
  products: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.products = [
      {
        name: 'Item1',
        price: 100,
        category: 'Category1',
        code: 'edf234',
        date: new Date(2017, 9, 1),
      },
      {
        name: 'Item2',
        price: 200,
        category: 'Category2',
        code: 'add134',
        date: new Date(2020, 9, 1),
      },
      {
        name: 'Item3',
        price: 300,
        category: 'Category3',
        code: 'rrd2344',
        date: new Date(2019, 9, 1),
      },
      {
        name: 'Item4',
        price: 400,
        category: 'Category4',
        code: 'fbg434',
        date: new Date(2018, 9, 1),
      },
    ];
  }
}
