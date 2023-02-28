import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from 'src/views/auth/auth.component';
import { MemoryComponent } from 'src/views/memory/memory.component';
import { AppComponent } from './app.component';

const routes: Routes = 
[
  {path: '', component: MemoryComponent},
  {path: 'main', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
