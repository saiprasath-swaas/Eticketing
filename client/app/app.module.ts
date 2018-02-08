﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {SelfbitsAngularModule} from 'selfbits-angular2-sdk';

const SELFBITSCONFIG = {
      BASE_URL:'',
      APP_ID:''
  };
  
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        SelfbitsAngularModule.initializeApp(SELFBITSCONFIG),
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        JwtInterceptorProvider,
        ErrorInterceptorProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }