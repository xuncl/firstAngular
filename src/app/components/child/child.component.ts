// 引入Input接收父组件(news)的传值
// 引入Output和EventEmitter来调用父组件的方法
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit {

// 通过Input接收过来的title值和fatherFn方法
  @Input() title:string;
  @Input() transportData2;
  @Input() fatherFn;
  @Input() fatherFn2;

  // 实例化EventEmitter
  @Output() private outer = new EventEmitter<string>()

  arg = "子组件（child）";

  constructor() { }

  ngOnInit() {
    this.title=this.title+" 可以修改父组件数据。";
  }

  childFn(){ // 子组件自己的方法
    this.fatherFn2(this.arg); // 子组件调用父组件的方法
  }

  // 子组件通过EventEmitter对象outer实例来广播数据
  sendParent(){
    // alert("here is child method.")
    // 调用父组件的方法，相当于把outer实例广播出去，括号里是参数。
    this.outer.emit("msg from child.")
  }

}
