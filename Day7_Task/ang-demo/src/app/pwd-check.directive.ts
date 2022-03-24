import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPwdCheck]'
})
export class PwdCheckDirective {

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {
   }

   checkPasswordStrength(){
    var len = this.elemRef.nativeElement.innerHTML.length;
    if(len<6){
      this.elemRef.nativeElement.style.background = 'red';
    }
    else if(len>=6 && len <13){
      this.elemRef.nativeElement.style.background = 'orange';
    }
    else{
      this.elemRef.nativeElement.style.background = 'green';
    }
   }
   @HostListener('window:keyup') ngOnChanges(){
     this.checkPasswordStrength();
   }

}
