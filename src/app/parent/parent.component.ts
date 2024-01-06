import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMsg: any = "";
  msgFromChild: any = "";

  sendToChild() {
    // console.log(this.parentMsg);
    return this.parentMsg;
  }

  getInputFromParent(event: any) {
    this.parentMsg = event.target.value;
  }

  getChildMsg(event: any) {
    this.msgFromChild = event;
  }
}
