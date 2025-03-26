import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import {AuthModule, AuthHttpInterceptor} from '@auth0/auth0-angular';
import { UserInformationComponent } from './pages/user-information/user-information.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    UserInformationComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 CommonModule,
    HttpClientModule,
    AuthModule.forRoot(
      {
        domain: "dev-0qcjeo2l2iabeljw.us.auth0.com",
        clientId: "ZvIXcovlJ8Twrf74vo4dG05MRLva3mVz",
        authorizationParams:{
          redirect_uri:window.location.origin
        },
        httpInterceptor:{
          allowedList :['https://dev-0qcjeo2l2iabeljw.us.auth0.com/api/v2/users']
        },
      }

    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
