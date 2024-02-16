import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  // element:ElementRef;
  // renderer:Renderer2;

  constructor(element:ElementRef,renderer:Renderer2){
   //this.element=element;
   //this.renderer=renderer;
  }

  @HostBinding('style.backgroundColor')
  backgroundColor:string='#28282B';

  @HostBinding('style.color')
  textColor:string='white';

  @HostBinding('style.border')
  border:string='none';

  @HostListener('mouseover')
  OnMouseEnter(){
    this.backgroundColor='white';
    this.textColor='#28282B';
    this.border='#28282B 3px solid';
  }

  @HostListener('mouseleave')
  OnMouseOut(){
    this.backgroundColor='#28282B';
    this.textColor='white';
    this.border='none';
  }


}
