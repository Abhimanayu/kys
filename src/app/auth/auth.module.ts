import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { LoginPageService } from '../Services/LaginPage/login-page.service';
import { BooksModule } from '../layout/layout/books/books.module';
import { PlansModule } from '../layout/layout/plans/plans.module';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../layout/layout/books/shared/shared.module';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BooksModule,
    PlansModule,
    LayoutModule,
    SharedModule
  ],
  providers:[
    LoginPageService
  ],
  bootstrap:[LoginPageComponent]
})
export class AuthModule { }
