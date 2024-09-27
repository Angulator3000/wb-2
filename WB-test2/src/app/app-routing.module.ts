import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppStartPageComponent } from './task2/app-start-page/app-start-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'table', loadChildren: () => import('./task2/task2.module').then(m => m.Task2Module) },
  {path: 'login', loadChildren: () => import ('./login/login.module').then(m => m.LoginModule)},
  {path: 'stream', loadChildren: () => import ('./task4/task4.module').then(m => m.Task4Module) },
  {path: 'ApiClient', loadChildren: () => import ('./htt-client/htt-client.module').then(m => m.HttClientModule)},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
