// 引入Input接收父组件(news)的传值
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit {

// 通过Input接收过来的title值和fatherFn方法
  @Input() title:string;
  @Input() transportData;
  @Input() fatherFn;
  @Input() fatherFn2;

  arg = "子组件（child）";

  constructor() { }

  ngOnInit() {
    this.title=this.title+" 可以修改父组件数据。";
  }

  childFn(){ // 子组件自己的方法
    this.fatherFn2(this.arg); // 子组件调用父组件的方法
  }

}
