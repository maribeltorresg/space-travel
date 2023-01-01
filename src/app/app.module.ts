import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrewModule } from './crew/crew.module';

import { DestinationModule } from './destination/destination.module';
import { SharedModule } from './shared/shared.module';
import { TechnologyModule } from './technology/technology.module';
import { HomeModule } from './home/home.module';



// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     DestinationModule
//   ],
// import { CrewModule } from './crew/crew.module';
// import { TechnologyModule } from './technology/technology.module';

@NgModule({
  declarations: [AppComponent],

  providers: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrewModule,
    TechnologyModule,
    HomeModule
    DestinationModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
