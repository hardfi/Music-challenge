import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {Round2Component} from './round2/round2.component';
import {Round3Component} from './round3/round3.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainComponent, data: ['Main page']},
  {path: 'round2', component: Round2Component, data: ['Round 2']},
  {path: 'round3', component: Round3Component, data: ['Round 3']}
];
