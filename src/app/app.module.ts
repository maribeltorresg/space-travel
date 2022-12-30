import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrewModule } from './crew/crew.module';
import { TechnologyModule } from './technology/technology.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  imports: [BrowserModule, AppRoutingModule, CrewModule, TechnologyModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
