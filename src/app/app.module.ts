import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {testButton} from "./testButtonComponent";
import {RouterLink} from "@angular/router";
@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent
  ],
    imports: [
        BrowserModule,
        RouterLink
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
