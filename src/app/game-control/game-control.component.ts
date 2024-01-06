import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  timerCount:number = 0;
  timer: any;
  evenCount = 0;
  oddCount = 0;

  @Output() evenEmitter = new EventEmitter();
  @Output() oddEmitter = new EventEmitter();

  startGame() {

    this.timer = setInterval(() => {
      this.timerCount++;

      if (this.timerCount % 2 == 0) {
        this.evenEmitter.emit(++this.evenCount);
      }
      else {
        this.oddEmitter.emit(++this.oddCount);
      }

    }, 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }
  resetGame(){
    this.timerCount=0;
    this.evenCount=0;
    this.oddCount=0;
  }

  constructor(private snackBar: MatSnackBar) {}
  showNotificationStart() {
    this.snackBar.open('Game Started ...Enjoy !!', 'Close', {
      duration: 2000,
    });
  }

  showNotificationStop() {
    this.snackBar.open('Game Stopped !!!', 'Close', {
      duration: 2000,
    });
  }
// ////////////////////////////////////////////////////////////////////

}
