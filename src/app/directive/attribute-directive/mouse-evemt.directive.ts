import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mouseEvent]'
})
export class MouseEvemtDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener("mousemove", ["$event"]) onMouseMove(event: MouseEvent) {
    let message = "X " + event.offsetX + "Y " + event.offsetY
    this.elementRef.nativeElement.innerHTML = message
  }
}
