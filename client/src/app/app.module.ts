import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// my modules
import { WelcomeModule } from './modules/welcome-module/welcome.module'
import { HomeModule } from './modules/home-module/home.module'

// services
import { SessionService } from './shared/services/session/session.service'

// components
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutPopupComponent } from './shared/components/about-popup/about-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    AboutPopupComponent,
  ],
  imports: [
    WelcomeModule,
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
