import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GameInfoComponent } from '../game-info/game-info.component';
import { RouterLink } from '@angular/router';
import { GameFieldComponent } from '../game-field/game-field.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [MatDialogModule, RouterLink,GameFieldComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  readonly dialog = inject(MatDialog);
  openDialog(): void {
    this.dialog.open(GameInfoComponent)
  }
  startGame(){

  }
}
