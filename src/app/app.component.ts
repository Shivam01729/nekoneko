import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card1Component } from './card1/card1.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { PlayList2Component } from './play-list2/play-list2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';
import { Card7Component } from './card7/card7.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Card1Component,MusicPlayerComponent,PlayList2Component,HomeComponent,LoginComponent,Card2Component,Card3Component,Card4Component,Card5Component,Card6Component,Card7Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AniTunes';
}
