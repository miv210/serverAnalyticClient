import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiAlertModule, TuiDialogModule, TuiDropdownModule, TuiRootModule } from '@taiga-ui/core';
import {TuiAvatarModule, tuiAvatarOptionsProvider, TuiInputModule} from '@taiga-ui/kit';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TuiCardModule} from '@taiga-ui/addon-commerce';
import { AuthComponent } from 'src/views/auth/auth.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
import { MemoryComponent } from 'src/views/memory/memory.component';
import {TuiTableModule} from '@taiga-ui/addon-table';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MemoryComponent
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
  ],
  providers: [tuiAvatarOptionsProvider({
    size: 'l',
    autoColor: true,
    rounded: true,
  }),],
  bootstrap: [AppComponent]
})
export class AppModule { }
