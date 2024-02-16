import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
selector:'[setBackground]'

})
export class SetBackground{

    element:ElementRef;
    renderer:Renderer2;

    constructor(element:ElementRef,renderer:Renderer2){
     this.element=element;
     this.renderer=renderer;
    }

    ngOnInit(){

        // this.element.nativeElement.style.backgroundColor='#36454F';
        // this.element.nativeElement.style.color='white';

        this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#36454F');
        this.renderer.setStyle(this.element.nativeElement,'color','white');

    }

}