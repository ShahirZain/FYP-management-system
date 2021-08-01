import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';

const routes: Routes = [
  {path: " ", redirectTo: '/loginform', pathMatch: 'full'},
  {path: "loginform", component: LoginformComponent},
  {path: "signup", component: SignupComponent},
  {path: "home", component: HomeComponent},
  {path: "teacherlogin", component: TeacherloginComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginformComponent, SignupComponent, HomeComponent, TeacherloginComponent, PageNotFoundComponent]
