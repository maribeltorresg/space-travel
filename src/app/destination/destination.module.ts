import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoComponent } from './destino/destino.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DestinoComponent],
  imports: [CommonModule, SharedModule],
  exports: [DestinoComponent],
})
export class DestinationModule {}
