import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { BooksModule } from './layout/books/books.module';
import { PlansModule } from './layout/plans/plans.module';
import { SharedModule} from './layout/books/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscriberModule } from './layout/subscriber/subscriber.module';



@NgModule({
  declarations: [
    LayoutComponent,

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BooksModule,
    PlansModule,
    SharedModule,
    ReactiveFormsModule,
    SubscriberModule
  ]
})
export class LayoutModule { }
