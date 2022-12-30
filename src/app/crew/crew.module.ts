import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    CardComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    MainComponent
  ]
})
export class CrewModule { }
