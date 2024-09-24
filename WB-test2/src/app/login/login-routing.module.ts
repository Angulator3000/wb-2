import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserProfileComponent } from './app-user-profile/app-user-profile.component';

const routes: Routes = [
  {path:'', component:AppUserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
