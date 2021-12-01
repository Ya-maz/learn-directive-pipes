import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributeComponent } from './attribute/attribute.component';
import { PipesComponent } from './pipes/pipes.component';
import { StructuralComponent } from './structural/structural.component';

const routers: Routes = [
  {
    path: '', pathMatch: "full", redirectTo: "attribute"
  },
  {
    path: 'attribute',
    component: AttributeComponent,
  },
  {
    path: 'structural',
    component: StructuralComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
