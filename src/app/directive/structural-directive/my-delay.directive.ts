import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myDelay]'
})
export class MyDelayDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input("myDelay") set delayTime(time: number) {
    console.log(time)
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }, time)
  }


}
