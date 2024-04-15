import { Routes } from '@angular/router';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { PlayList2Component } from './play-list2/play-list2.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'music-player',component: MusicPlayerComponent},
    {path:'play-list2',component: PlayList2Component},
    {path:'login',component: LoginComponent}
];
