import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {
    //elemRef.nativeElement.style.color = 'green';
    //elemRef.nativeElement.style.background='orange';
    this.changeDOM('purple','green');
  }
  

  changeDOM(bg:string, color:string){
    this.renderer.setStyle(this.elemRef.nativeElement, 'background',bg);
    this.renderer.setStyle(this.elemRef.nativeElement,'color',color);
    

  }

  @HostListener('mouseenter') onMouseEnter(){
    this.changeDOM('orange','blue');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.changeDOM('lightblue','red');
  }

}
