import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryComponent } from 'src/app/views/runningProcesses/runningProcesses.component';
import { AppComponent } from './app.component';
import { AnalyticsComponent } from './views/analytics/analytics.component';
import { AuthComponent } from './views/auth/auth.component';
import { ServersComponent } from './views/servers/servers.component';

const routes: Routes = 
[
  {path: '', component: AuthComponent},
  {path: 'main', component: AppComponent },
  {path: 'main/analytics', component: AnalyticsComponent },
  {path: 'main/history', component: MemoryComponent},
  {path: 'main/servers', component: ServersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
