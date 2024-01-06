import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  childMsg: string = "";

  @Input() textFromParent: string = "";
  @Output() childEventEmitter=new EventEmitter<string>();

  getInputFromChild(event: any) {
    this.childMsg=event.target.value;
  }

  sendToParent(){
    this.childEventEmitter.emit(this.childMsg);
  }
}
