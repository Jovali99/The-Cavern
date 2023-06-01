import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {testButton} from "./testButtonComponent";
import { AppRoutingModule } from './app-routing.module';
import {LogoComponent} from "../logo/logo.component";
import {ProjectLogoComponent} from "../project-logo/project-logo.component";
import {ProjectComponent} from "../project/project.component";
import {ProjectTemplateComponent} from "../project-template/project-template.component";


@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      LogoComponent,
      ProjectLogoComponent,
      ProjectComponent,
      ProjectTemplateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
