import { Directive, TemplateRef, ContentChild, Input } from '@angular/core';

@Directive({
  selector: 'tab'
})
export class TabDirective {
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @Input() title: string;
  @Input() context: Object = {};
  selected: boolean;
}
