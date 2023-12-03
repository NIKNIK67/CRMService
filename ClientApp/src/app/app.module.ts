import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthorizationJwtInterceptor } from './AuthorizationJwtInterceptor';
import { AuthService } from './AuthService';
import { JwtModule } from '@auth0/angular-jwt/lib/angular-jwt.module';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsAddingComponent } from './news-adding/news-adding.component';
import { NewsEditingComponent } from './news-editing/news-editing.component';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => AuthorizationJwtInterceptor),
  multi: true
};

@NgModule({

  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginPageComponent,
    DashboardComponent,
    NewsAddingComponent,
    NewsEditingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthService] },
      { path: 'login-page', component: LoginPageComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthService] },
      { path: 'news-edit/:id', component: NewsEditingComponent, pathMatch: 'full', canActivate: [AuthService] },
      { path: 'news-add', component: NewsAddingComponent, pathMatch: 'full', canActivate: [AuthService] },
    ]),
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AuthorizationJwtInterceptor,
    API_INTERCEPTOR_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
