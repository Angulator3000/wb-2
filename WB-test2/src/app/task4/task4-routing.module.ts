import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStreamComponent } from './data-stream/data-stream.component';

const routes: Routes = [
  {path: '', component: DataStreamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task4RoutingModule { }
