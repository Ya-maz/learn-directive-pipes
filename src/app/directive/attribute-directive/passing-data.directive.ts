import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myChangeColor]'
})
export class PassingDataDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input("myChangeColor") set changeColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", color)
  }
}
