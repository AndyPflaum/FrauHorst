import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GameFieldComponent } from './game-field/game-field.component';

export const routes: Routes = [
    { path:'', component: GameComponent},
    { path:'gameField', component: GameFieldComponent},
];
