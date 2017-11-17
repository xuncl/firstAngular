import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  targetList = [];
  doneList = [];
  inputContent = "";

  constructor() { }

  ngOnInit() {
  }

  addKeyUpFn(e) {
    if (e.keyCode == 13) {
      if (this.inputContent) {
        this.targetList.push(this.inputContent);
        this.inputContent = "";
      }
      // alert("hui che")
    }
  }

  addButtonFn() {
    if (this.inputContent) {
      this.targetList.push(this.inputContent);
      this.inputContent = "";
    }
  }

  finishFn(i) {
    this.doneList.push(this.targetList.splice(i, 1));
  }

  deleteFn(i) {
    this.targetList.splice(i, 1);
  }

}
