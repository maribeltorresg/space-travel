import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTechnologyComponent } from './content-technology/content-technology.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContentTechnologyComponent],
  imports: [CommonModule, SharedModule],
  exports: [ContentTechnologyComponent],
})
export class TechnologyModule {}
