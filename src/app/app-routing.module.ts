import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListpageComponent } from './listpage/listpage.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path: 'listpage', component: ListpageComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
