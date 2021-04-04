import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import FontAwsomeModule
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faUser, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faGoogle,faApple } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
 
    // Add an icon to the library for convenient access in other components
    library.addIcons(faUser,faLock,faPhone,faFacebook,faGoogle,faApple);
  }
}
