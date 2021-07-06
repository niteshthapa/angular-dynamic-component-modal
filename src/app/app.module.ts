import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalComponent } from './layout/modal/modal.component';
import { ViewcontainerrefDirective } from './shared/directive/viewcontainerref.directive';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ViewcontainerrefDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
