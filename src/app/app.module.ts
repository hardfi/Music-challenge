import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Round2Component} from './round2/round2.component';
import {RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { Round3Component } from './round3/round3.component';
import {SharedModule} from './shared/shared.module';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Round2Component,
    Round3Component,
    TopBarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
