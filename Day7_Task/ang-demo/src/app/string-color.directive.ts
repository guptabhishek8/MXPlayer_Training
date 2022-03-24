import { Directive , Renderer2, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appStringColor]'
})
export class StringColorDirective {

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { 
    
  }
  changeDOM(){
      var strLength = this.elemRef.nativeElement.innerHTML.length;
      if(strLength>50){
        this.renderer.setStyle(this.elemRef.nativeElement, 'background','green');
        this.renderer.setStyle(this.elemRef.nativeElement,'color','blue');
      }
      else if(strLength>20){
        this.renderer.setStyle(this.elemRef.nativeElement, 'background','purple');
        this.renderer.setStyle(this.elemRef.nativeElement,'color','red');
      }
      else{
        this.renderer.setStyle(this.elemRef.nativeElement, 'background','yellow');
        this.renderer.setStyle(this.elemRef.nativeElement,'color','black');
      }
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.changeDOM();
  }
}
