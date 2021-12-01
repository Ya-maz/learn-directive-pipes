import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { ChainingPipesComponent } from './chaining-pipes/chaining-pipes.component';
import { AsyncPipesComponent } from './async-pipes/async-pipes.component';
import { AsyncObservableComponent } from './async-observable/async-observable.component';
import { SimplePipe } from './simple-pipe/simple.pipe';

@NgModule({
  declarations: [

    PipesComponent,
    ChainingPipesComponent,
    AsyncPipesComponent,
    AsyncObservableComponent,
    SimplePipe,
  ],
  imports: [CommonModule],
})
export class PipesModule {}
