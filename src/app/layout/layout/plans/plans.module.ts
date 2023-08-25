import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansListComponent } from './plans-list/plans-list.component';
import { SharedModule } from '../books/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlansListComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PlansModule { }
