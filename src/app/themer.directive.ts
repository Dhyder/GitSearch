import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appThemer]'
})
export class ThemerDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.textDeco('yellow')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.textDeco('white')
  }
  private textDeco(action: string){
    this.elem.nativeElement.style.color = action;
  }

}
