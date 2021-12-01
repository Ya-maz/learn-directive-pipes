import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleDirectiveDirective } from '../directive/attribute-directive/simple-directive.directive';
import { EventDirectiveDirective } from '../directive/attribute-directive/event-directive.directive';
import { PassingDataDirective } from '../directive/attribute-directive/passing-data.directive';
import { MyRepeatDirective } from '../directive/attribute-directive/my-repeat.directive';
import { ClickableDirective } from '../directive/attribute-directive/clickable.directive';
import { MyConfirmDirective } from '../directive/attribute-directive/my-confirm.directive';
import { MouseEvemtDirective } from '../directive/attribute-directive/mouse-evemt.directive';
import { AttributeComponent } from './attribute.component';



@NgModule({
  declarations: [
    
    SimpleDirectiveDirective,
    EventDirectiveDirective,
    PassingDataDirective,

    MyRepeatDirective,
     MyConfirmDirective,
     MouseEvemtDirective,
     ClickableDirective,
     AttributeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AttributeModule { }
