import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { JavaComponent } from './html/java/java.component';
import { JavaJsComponent } from './html/java.js/java.js.component';
import { HtmlComponentJsComponent } from './html/html.component.js/html.component.js.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    JavaComponent,
    JavaJsComponent,
    HtmlComponentJsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
