import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  even:any = 0;
  odd:any = 0;

  evenBackgroundColor: string = 'lightblue';
  oddBackgroundColor: string = 'lightcoral';

  getEvenCount(count: any) {
    this.even = count;
    this.oddBackgroundColor = count % 2 !== 0 ? 'lightsalmon' : 'lightcoral';
    // console.log(this.even);
  }

  getOddCount(count: any) {
    this.odd = count;
    this.evenBackgroundColor = count % 2 === 0 ? 'lightgreen' : 'lightblue';
    // console.log(this.odd);
  }

  setEvenCount():any{
    return this.even;
  }

  setOddCount():any{
    return this.odd;
  }
}
