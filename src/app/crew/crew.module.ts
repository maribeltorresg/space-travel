import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CardComponent, MainComponent],
  imports: [CommonModule, SharedModule],
  exports: [CardComponent, MainComponent],
})
export class CrewModule {}
