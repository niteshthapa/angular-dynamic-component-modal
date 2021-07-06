import { Directive,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appViewcontainerref]'
})
export class ViewcontainerrefDirective {

  constructor(public ViewContainerRef:ViewContainerRef) { }

}
