import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
{path : 'home' , component : HomeComponent},
{path : 'login' , component : LoginComponent},
{path : 'page' , component : PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
