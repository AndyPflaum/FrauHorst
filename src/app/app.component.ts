import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './game/game.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GameInfoComponent } from './game-info/game-info.component';
import { GameFieldComponent } from './game-field/game-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GameComponent,MatDialogModule,GameInfoComponent,GameFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FrauHorst';
}
