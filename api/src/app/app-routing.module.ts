import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { WellcomeComponent } from './pages/wellcome/wellcome.component';
import { ObjectiveComponent } from './pages/objective/objective.component';
import { ActivityComponent } from './pages/activity/activity.component';

import { WeigthComponent } from './pages/weigth/weigth.component';
import { AlmostComponent } from './pages/almost/almost.component';
import { ResultsComponent } from './pages/results/results.component';


const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'',component:WellcomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'wellcome',component:WellcomeComponent},
  {path:'objective', component:ObjectiveComponent},
  {path:'activity', component:ActivityComponent},
  {path:'weigth', component:WeigthComponent},
  {path:'almost', component:AlmostComponent},
  {path:'results', component:ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
