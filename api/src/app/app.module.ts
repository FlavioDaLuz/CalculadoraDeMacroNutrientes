import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './pages/home/home.component';
import { HomeHeaderComponent } from './components/homeComponents/home-header/home-header.component';
import { HomeBodyComponent } from './components/homeComponents/home-body/home-body.component';
import { HomeFooterComponent } from './components/homeComponents/home-footer/home-footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterBodyComponent } from './components/registerComponents/register-body/register-body.component';
import { RegisterFooterComponent } from './components/registerComponents/register-footer/register-footer.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginBodyComponent } from './components/loginComponents/login-body/login-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WellcomeComponent } from './pages/wellcome/wellcome.component';
import { WellcomeBodyComponent } from './components/wellcomeComponents/wellcome-body/wellcome-body.component';
import { WellcomeFooterComponent } from './components/wellcomeComponents/wellcome-footer/wellcome-footer.component';
import { WellcomeHeaderComponent } from './components/wellcomeComponents/wellcome-header/wellcome-header.component';
import { HttpClientModule } from '@angular/common/http';
import { ObjectiveComponent } from './pages/objective/objective.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { WeigthComponent } from './pages/weigth/weigth.component';
import { ObjectiveHeaderComponent } from './components/ObjectiveComponents/objective-header/objective-header.component';
import { ObjectiveBodyComponent } from './components/ObjectiveComponents/objective-body/objective-body.component';
import { ObjectiveFooterComponent } from './components/ObjectiveComponents/objective-footer/objective-footer.component';
import { ActivityHeaderComponent } from './components/ActivityComponents/activity-header/activity-header.component';
import { ActivityBodyComponent } from './components/ActivityComponents/activity-body/activity-body.component';
import { AlmostComponent } from './pages/almost/almost.component';
import { AlmostBodyComponent } from './components/AlmostComponents/almost-body/almost-body.component';
import { AlmostHeaderComponent } from './components/AlmostComponents/almost-header/almost-header.component';
import { WeigthHeaderComponent } from './components/WeigthComponents/weigth-header/weigth-header.component';
import { WeigthBodyComponent } from './components/WeigthComponents/weigth-body/weigth-body.component';
import { ResultsComponent } from './pages/results/results.component';

import { ResultsHeaderComponent } from './components/ResultsComponents/results-header/results-header.component';
import { ResultsBodyComponent } from './components/ResultsComponents/results-body/results-body.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeBodyComponent,
    HomeFooterComponent,
    RegisterComponent,
    RegisterBodyComponent,
    RegisterFooterComponent,
    LoginComponent,
    LoginBodyComponent,
    WellcomeComponent,
    WellcomeBodyComponent,
    WellcomeFooterComponent,
    WellcomeHeaderComponent,
    ObjectiveComponent,
    ActivityComponent,
    WeigthComponent,
    ObjectiveHeaderComponent,
    ObjectiveBodyComponent,
    ObjectiveFooterComponent,
    ActivityHeaderComponent,
    ActivityBodyComponent,
    AlmostComponent,
    AlmostBodyComponent,
    AlmostHeaderComponent,
    WeigthHeaderComponent,
    WeigthBodyComponent,
    ResultsComponent,

    ResultsHeaderComponent,
    ResultsBodyComponent
 

  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
