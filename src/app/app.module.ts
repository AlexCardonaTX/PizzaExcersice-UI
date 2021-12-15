import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToppingsModule } from './toppings/toppings.module';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToppingsModule,
    MdbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
