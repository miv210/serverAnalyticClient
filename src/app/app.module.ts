import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiAlertModule, 
  TuiDialogModule, 
  TuiExpandModule, 
  TuiDropdownModule, 
  TuiRootModule, 
  TuiDataListModule, 
  TuiLoaderModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAvatarModule, 
  tuiAvatarOptionsProvider, 
  TuiInputModule,
  TuiTabsModule,
  TuiInputDateTimeModule,
  TuiDataListWrapperModule, 
  TuiSelectModule} from '@taiga-ui/kit';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TuiCardModule} from '@taiga-ui/addon-commerce';
import { AuthComponent } from './views/auth/auth.component'
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
import { MemoryComponent } from 'src/app/views/runningProcesses/runningProcesses.component';
import {TuiTableModule} from '@taiga-ui/addon-table';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ServersComponent } from './views/servers/servers.component';
import { AnalyticsComponent } from './views/analytics/analytics.component';
import {TuiLetModule} from '@taiga-ui/cdk';
import { DialogAddServerComponent } from './components/dialog-add-server/dialog-add-server.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MemoryComponent,
    NavBarComponent,
    ServersComponent,
    AnalyticsComponent,
    DialogAddServerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiAlertModule,
    TuiDialogModule,
    TuiAvatarModule,
    TuiDropdownModule,
    TuiCardModule,
    TuiInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    TuiTableModule,
    TuiExpandModule,
    TuiTabsModule,
    TuiInputDateTimeModule,
    TuiDataListModule,
    TuiDataListWrapperModule, 
    TuiSelectModule,
    FormsModule,
    TuiLoaderModule,
    TuiTextfieldControllerModule,
    TuiLetModule,
  ],
  providers: [tuiAvatarOptionsProvider({
    size: 'l',
    autoColor: true,
    rounded: true,
  }),],
  bootstrap: [AppComponent]
})
export class AppModule { }
