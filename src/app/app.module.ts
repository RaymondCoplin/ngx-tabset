import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TabPanelComponent } from './tab/tab-panel.component';
import { TabDirective } from './tab/tab.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TabPanelComponent, TabDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
