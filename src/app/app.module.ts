import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { LoginPageService } from './Services/LaginPage/login-page.service';
import { BooksService } from './Services/Books/books.service';
import { PlansService } from './Services/Plans/plans.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginPageService,
    BooksService,
    PlansService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
