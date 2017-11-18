import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Http,Jsonp } from '@angular/http'; // 注意这里引入的不是Module

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

  constructor(private http:Http, private jsonp:Jsonp) { // 在构造函数中申明
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

  requestData(){
    // alert("requestData");
    var url = "http://www.baidu.com/";
    this.http.get(url).subscribe(function(data){
      console.log(data);
    },function(err){
      console.log(err);
    });
  }

  requestJsonpData(){
        // alert("requestData");
        var url = "http://www.baidu.com/callback=JSONP_CALLBACK";// jsonp必须要有这个参数，返回必须是json
        this.jsonp.get(url).subscribe(function(data){
          console.log(data);
        },function(err){
          console.log(err);
        });
  }
}
