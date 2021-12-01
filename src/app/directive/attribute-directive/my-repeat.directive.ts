import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myRepeat], myRepeat'
})
export class MyRepeatDirective {
  private countIsNumber: number = 0;
  @Input() message: string = '';
  @Input() set count(value: string | number) {
    if (typeof value == 'string') {
      this.countIsNumber = JSON.parse(value)
    } else {
      this.countIsNumber = value
    }
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.countIsNumber && this.message) {
      for (let i = 0; i < this.countIsNumber; i++){
      let elem: HTMLDivElement = this.renderer.createElement("div");
      this.renderer.appendChild(this.elementRef.nativeElement, elem);
      elem.innerHTML = this.message;}
    }
  }
}
