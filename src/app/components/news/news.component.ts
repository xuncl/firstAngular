import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

  title="你好 Angular 4.x" // 属性

  msg: any
  msgString: string // 默认public

// 声明属性可以加修饰符 public,protected,private

  public username="张三"

  // 数组和对象
  public list=[]
  public obj = {
    name: "zhangsan"
  }
  public list2:any[]
  public list3:any[]
  public list4:any[]

  constructor() {
    this.msg="另一种定义属性的方法"
    this.msgString="<h2>这里是取回的新闻数据。</h2>"
    
    this.list=["111","222","333"]
    this.list2=["xun","chen","long"]
    this.list3=[
      {"title":"123"},
      {"title":"234"},
      {"title":"345"},
    ]
    this.list4=[
      {"car":"bmw",
        "list":[{"title":"123"},
        {"title":"234"},
        {"title":"345"}]
      },
      {"car":"audi",
        "list":[{"title":"123"},
        {"title":"234"},
        {"title":"345"}]
      },

    ]
  }

  ngOnInit() {
  }

}
