import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {
  @Input() backgroundColor:any="";
  @Input() oddNumber:number = 0;
}
