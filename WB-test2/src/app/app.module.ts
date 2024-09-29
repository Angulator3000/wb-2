import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTableComponent } from './task2/app-table/app-table.component';
import { MatTableModule } from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSortModule } from '@angular/material/sort';
import { AppStartPageComponent } from './task2/app-start-page/app-start-page.component';
import { MatButtonModule } from '@angular/material/button';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { Task2Module } from './task2/task2.module';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginModule } from './login/login.module';
import { Task4RoutingModule } from './task4/task4-routing.module';
import { HttClientModule } from './htt-client/htt-client.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MockInterceptor } from './htt-client/mock-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AppTableComponent,
    AppStartPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatButtonModule,
    BrowserAnimationsModule,
    Task2Module,
    MatNativeDateModule,
    LoginModule,
    Task4RoutingModule,
    HttClientModule,
    MatSnackBarModule

  ],
  providers: [
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
