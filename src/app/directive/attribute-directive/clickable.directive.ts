import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[clickable]'
})
export class ClickableDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.cursor = "pointer";
  }
  
  @HostBinding("class.pressed") isClicked: boolean = false;

  @HostListener("mousedown") onMouseDown() {
    this.isClicked = true;
  }

  @HostListener("mouseup") onMouseUp() {
    this.isClicked = false;
  }
}
