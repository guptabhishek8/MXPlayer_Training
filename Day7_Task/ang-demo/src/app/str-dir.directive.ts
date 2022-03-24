import { Directive, TemplateRef, ViewContainerRef ,Input} from '@angular/core';

@Directive({
  selector: '[appStrDir]'
})
export class StrDirDirective{

  constructor( private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

  @Input() set appStrDir(time: number){
    setTimeout(()=>{
      this.viewRef.createEmbeddedView(this.templateRef);
    }, time);
  }

}