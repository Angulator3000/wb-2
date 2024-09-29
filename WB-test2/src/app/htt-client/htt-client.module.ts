import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttClientRoutingModule } from './htt-client-routing.module';
import { HttpClientComponent } from './http-client/http-client.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MockInterceptor } from './mock-interceptor';


@NgModule({
  declarations: [
    HttpClientComponent
  ],
  imports: [
    CommonModule,
    HttClientRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
  ],
})
export class HttClientModule { }
