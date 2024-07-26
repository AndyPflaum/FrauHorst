import { Component, inject } from '@angular/core';
import { GameInfoComponent } from "../game-info/game-info.component";
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-field',
  standalone: true,
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss'],
  imports: [GameInfoComponent, CommonModule]
})
export class GameFieldComponent {
  wuerfelBilder = [
    'assets/img/one.png',
    'assets/img/two.png',
    'assets/img/three.png',
    'assets/img/four.png',
    'assets/img/five.png',
    'assets/img/six.png'
  ];

  wurfSound = new Audio('assets/sound/würfel.mp3');
  jubelSound = new Audio('assets/sound/jubeln.mp3');
  wuerfel1 = this.wuerfelBilder[0];
  wuerfel2 = this.wuerfelBilder[0];
  isRotating = false;
  isButtonDisabled = false;
  readonly dialog = inject(MatDialog);

  wuerfeln() {
    if (this.isButtonDisabled) {
      return;
    }

    this.wurfSound.play();

    this.isRotating = true;
    this.isButtonDisabled = true;
    const interval = setInterval(() => {
      this.wuerfel1 = this.getRandomWuerfel();
      this.wuerfel2 = this.getRandomWuerfel();
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      this.wuerfel1 = this.getRandomWuerfel();
      this.wuerfel2 = this.getRandomWuerfel();
      this.isRotating = false;
      this.isButtonDisabled = false;
    }, 1000);
  }

  getRandomWuerfel() {
    const randomIndex = Math.floor(Math.random() * this.wuerfelBilder.length);
    return this.wuerfelBilder[randomIndex];
  }

  getSum() {
    const value1 = this.wuerfelBilder.indexOf(this.wuerfel1) + 1;
    const value2 = this.wuerfelBilder.indexOf(this.wuerfel2) + 1;
    if (value1 + value2 === 3) {
      this.jubelSound.play()
    }
    return value1 + value2;
  }

  openDialog(): void {
    this.dialog.open(GameInfoComponent);
  }
}
