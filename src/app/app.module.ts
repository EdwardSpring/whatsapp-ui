import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FocusDirective } from './focus.directive';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { Pane1Component } from './pane1/pane1.component';
import { Pane2Component } from './pane2/pane2.component';

@NgModule({
  declarations: [
    AppComponent,
    FocusDirective,
    ChatboxComponent,
    Pane1Component,
    Pane2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
