import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriberRoutingModule } from './subscriber-routing.module';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';


@NgModule({
  declarations: [
    SubscriberListComponent
  ],
  imports: [
    CommonModule,
    SubscriberRoutingModule
  ]
})
export class SubscriberModule { }
