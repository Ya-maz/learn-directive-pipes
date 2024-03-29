import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myConfirm]'
})
export class MyConfirmDirective {
  constructor() { }
  @Input("myConfirm")
  onConfirmed: Function = () => { }
  
  @HostListener("click") onConfirm(event: Event) {
    let confirmed = window.confirm("Вы уверены?");

    if (confirmed) {
      this.onConfirmed()
    }
  }

}
