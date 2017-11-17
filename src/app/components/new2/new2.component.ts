import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrls: ['./new2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class New2Component implements OnInit {

  public msg:any;
  public username:any;
  public flag:any;
  public search:any;

  public storage= new StorageService();

  constructor() {
    this.msg="这是另一个新闻组件。"
    this.username="name";
    this.flag=true;
    this.search="";
   }

  ngOnInit() {
  }

  getMsg(){
    // 获取属性的值
    alert(this.msg);
  }

  setUsername(){
    this.username="new name"
  }

  toggleFlag(){
    this.flag=!this.flag;
  }

  keyupFn(e){
    console.log("Key up now!")
    console.log(e)
    if (e.keyCode==13){
      alert("hui che")
    }
  }

  onClick(e){
    console.log(e);
  }

  getSearch(){
    alert(this.search);
  }
}
