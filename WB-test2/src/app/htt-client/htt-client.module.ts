import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttClientRoutingModule } from './htt-client-routing.module';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HttpClientComponent
  ],
  imports: [
    CommonModule,
    HttClientRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HttClientModule { }
