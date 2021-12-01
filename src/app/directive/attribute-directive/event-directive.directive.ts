import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[newEvent]'
})
export class EventDirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.changeColor("green")
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.changeColor("")
  }

  private changeColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", color)
  }
}
