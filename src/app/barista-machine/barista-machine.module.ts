import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbListModule,
  NbSpinnerModule
} from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BaristaMachineComponent } from './barista-machine.component';
import { BaristaDrinksMenuComponent } from './barista-drinks-menu/barista-drinks-menu.component';
import { BaristaDrinksInventoryComponent } from './barista-drinks-inventory/barista-drinks-inventory.component';


@NgModule({
  declarations: [BaristaMachineComponent, BaristaDrinksMenuComponent, BaristaDrinksInventoryComponent],
  exports: [BaristaMachineComponent],
  imports: [
    CommonModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbLayoutModule,
    NbListModule,
    NbSpinnerModule,
    FontAwesomeModule
  ]
})
export class BaristaMachineModule {}
