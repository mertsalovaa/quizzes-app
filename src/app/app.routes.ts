import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { FinishComponent } from './finish/finish.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'play', component: PlayComponent },
  { path: 'finish', component: FinishComponent },
  { path: '**', redirectTo: 'home' },
];
