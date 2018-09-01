import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScoreService} from './services/score.service';
import {TimerComponent} from './components/timer/timer.component';
import {ScoresComponent} from './components/scores/scores.component';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import {FormsModule} from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PanelModule,
    ButtonModule,
    BrowserAnimationsModule,
    DialogModule,
    InputTextModule,
    FieldsetModule,
    FormsModule,
    SidebarModule,
    MenubarModule
  ],
  declarations: [
    TimerComponent,
    ScoresComponent
  ],
  exports: [
    TimerComponent,
    ScoresComponent,
    CardModule,
    PanelModule,
    ButtonModule,
    BrowserAnimationsModule,
    DialogModule,
    InputTextModule,
    FieldsetModule,
    FormsModule,
    SidebarModule,
    MenubarModule
  ],
  providers:
    [ScoreService]
})
export class SharedModule { }
