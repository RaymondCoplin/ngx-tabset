import { Directive, ContentChild, Input } from '@angular/core';

@Directive({
  selector: 'tab'
})
export class TabDirective {
  @ContentChild('tabContent') templateRef;
  @Input() title: string;
  @Input() context: Object = {};
  selected: boolean;
}