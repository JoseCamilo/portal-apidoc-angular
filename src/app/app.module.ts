import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PoModule } from '@po-ui/ng-components';
import { ApiDocumentationModule } from './modules/api-documentation/api-documentation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PoModule,
    ApiDocumentationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
