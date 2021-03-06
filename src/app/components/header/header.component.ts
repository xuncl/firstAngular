import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StorageService } from '../../services/storage.service';

import { Router } from '@angular/router';

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

  constructor(private storage:StorageService, private router:Router) {
   }

  ngOnInit() {
    this.targetList = this.storage.getItem("target");
    if (!this.targetList) this.targetList = [];
    this.doneList = this.storage.getItem("done");
    if (!this.doneList) this.doneList = [];
  }

  addKeyUpFn(e) {
    if (e.keyCode == 13) {
      this.addButtonFn();
    }
  }

  addButtonFn() {
    if (this.inputContent) {
      this.targetList.push(this.inputContent);
      this.inputContent = "";
      this.storage.setItem("target", this.targetList);
    }
  }
  
  finishFn(i) {
    this.doneList.push(this.targetList.splice(i, 1));
    this.storage.setItem("target", this.targetList);
    this.storage.setItem("done", this.doneList);
  }
  
  deleteFn(i) {
    this.targetList.splice(i, 1);
    this.storage.setItem("target", this.targetList);
  }

  goNews(){
    // alert("goNews");
    // this.router.navigate(["/news"]);
    // this.router.navigate(["/content/1"]); // 这种方法也行
    this.router.navigate(["/content", "123"]); // 推荐这种
  }
}
