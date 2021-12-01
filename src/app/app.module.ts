import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AttributeModule } from './attribute/attribute.module';
import { StructuralModule } from './structural/structural.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule,
    AttributeModule,
    StructuralModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
