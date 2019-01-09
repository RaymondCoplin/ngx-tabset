import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabDirective } from './tab.directive';

@Component({
  selector: 'tab-panel',
  template: `
    <button *ngFor="let tab of tabs" (click)="select(tab)">{{tab.title}}</button>
    <div class="container">
      <ng-container *ngTemplateOutlet="tabSelected?.templateRef; context: tabSelected?.context"></ng-container>
    </div>
  `
})
export class TabPanelComponent implements AfterContentInit {

  @ContentChildren(TabDirective)
  tabs: QueryList<TabDirective>;

  ngAfterContentInit() {
    this.tabs.first.selected = true;
  }

  select(_tab: TabDirective) {
    this.tabs.forEach(x => x.selected = false);
    _tab.selected = true;
  }

  get tabSelected() {
    return this.tabs.find(x => x.selected === true);
  }

}