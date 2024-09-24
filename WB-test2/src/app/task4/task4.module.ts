import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task4RoutingModule } from './task4-routing.module';
import { DataStreamComponent } from './data-stream/data-stream.component';


@NgModule({
  declarations: [
    DataStreamComponent
  ],
  imports: [
    CommonModule,
    Task4RoutingModule
  ]
})
export class Task4Module { }
