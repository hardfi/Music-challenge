import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';

import {AppComponent} from './app.component';
import {Round2Component} from './round2/round2.component';
import {RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { TimerComponent } from './timer/timer.component';
import {ScoreService} from './score.service';
import { ScoresComponent } from './scores/scores.component';
import { Round3Component } from './round3/round3.component';

@NgModule({
  declarations: [
    AppComponent,
    Round2Component,
    MainComponent,
    TimerComponent,
    ScoresComponent,
    Round3Component
  ],
  imports: [
    BrowserModule,
    CardModule,
    PanelModule,
    ButtonModule,
    BrowserAnimationsModule,
    DialogModule,
    InputTextModule,
    FieldsetModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: MainComponent},
      {path: 'round2', component: Round2Component},
      {path: 'round3', component: Round3Component}
    ]),
  ],
  providers:
    [ScoreService],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
