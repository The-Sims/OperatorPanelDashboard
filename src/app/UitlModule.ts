import {NgModule} from '@angular/core';
import {ErrorCardComponent} from './utilcomponents/error-card/error-card.component';
import {PacmanComponent} from './utilcomponents/pacman/pacman.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ErrorCardComponent,
    PacmanComponent,
  ],
  exports: [
    ErrorCardComponent,
    PacmanComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class UtilModule {}
