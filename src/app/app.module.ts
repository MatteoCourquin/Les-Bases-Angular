import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Changer la langue de l'application:
import { registerLocaleData } from '@angular/common';
import * as localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent
  ],
  imports: [
    BrowserModule
  ],
  // Changer la langue de l'application:
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        registerLocaleData(localeFr.default);
    }
}
