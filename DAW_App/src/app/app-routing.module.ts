import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes : Routes = [
    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent, children: [
        {path: 'login', component: AuthLoginComponent},
        {path: 'register', component: AuthSignupComponent},
    ]},
    {path: 'home', component: HomeComponent},
]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}