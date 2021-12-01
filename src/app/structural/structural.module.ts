import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyIfDirective } from '../directive/structural-directive/my-if.directive';
import { StructuralComponent } from './structural.component';
import { MyDelayDirective } from '../directive/structural-directive/my-delay.directive';
import { UserCardDirective } from '../directive/structural-directive/user-card.directive';

@NgModule({
  declarations: [
    MyIfDirective,
    MyDelayDirective,
    UserCardDirective,
    StructuralComponent,
  ],
  imports: [CommonModule],
})
export class StructuralModule {}
