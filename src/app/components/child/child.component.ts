// 引入Input接收父组件(news)的传值
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit {

// 通过Input接收过来的title值
  @Input() title:string;
  @Input() transportData:string;

  constructor() { }

  ngOnInit() {
  }

}
