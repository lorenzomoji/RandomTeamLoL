
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RandomTeamComponent } from './components/random-team/random-team.component';

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'random-team', component: RandomTeamComponent},
    {path: '**', pathMatch: 'full',  redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);