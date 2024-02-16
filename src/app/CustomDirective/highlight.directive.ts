import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  element:ElementRef;
  renderer:Renderer2;

  constructor(element:ElementRef,renderer:Renderer2){
   this.element=element;
   this.renderer=renderer;
  }

  @HostListener('mouseover')
  OnMouseEnter(){
    this.renderer.addClass(this.element.nativeElement,'highlight-product');
  }

  @HostListener('mouseleave')
  OnMouseOut(){
    this.renderer.removeClass(this.element.nativeElement,'highlight-product');
  }
}
