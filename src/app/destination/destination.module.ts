import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoComponent } from './destino/destino.component';



@NgModule({
  declarations: [
    DestinoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DestinoComponent],
})
export class DestinationModule { }
