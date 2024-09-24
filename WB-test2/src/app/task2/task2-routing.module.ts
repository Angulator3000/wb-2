import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppStartPageComponent } from './app-start-page/app-start-page.component';

const routes: Routes = [
  { path: '', component: AppStartPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task2RoutingModule { }
