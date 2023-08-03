import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path : 'login',component:LoginComponent},
  {path : 'dashboard', component: DashboardComponent},

  {path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'offices', loadChildren: () => import('./offices/offices.module').then(m => m.OfficesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
