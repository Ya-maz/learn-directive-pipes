import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class SimpleDirectiveDirective {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'color', 'red')
  }

}
