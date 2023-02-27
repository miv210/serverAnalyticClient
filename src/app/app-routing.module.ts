import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from 'src/views/auth/auth.component';
import { AppComponent } from './app.component';

const routes: Routes = 
[
  {path: '', component: AuthComponent},
  {path: 'main', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
