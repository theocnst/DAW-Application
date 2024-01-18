import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { HomeComponent } from './home/home.component';
import { SideNavigationComponent } from './home/side-navigation/side-navigation.component';
import { MainNavigationComponent } from './home/main-navigation/main-navigation.component';
import { MainPanelComponent } from './home/main-panel/main-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthComponent,
    AuthSignupComponent,
    HomeComponent,
    SideNavigationComponent,
    MainNavigationComponent,
    MainPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
