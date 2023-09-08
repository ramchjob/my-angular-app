import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentBaseComponent } from './component-base/component-base.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentNotFoundComponent } from './component-not-found/component-not-found.component';
import { HttpClientModule } from '@angular/common/http'
import { UserServiceService } from './user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentBaseComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
