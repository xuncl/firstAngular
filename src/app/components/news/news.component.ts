import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Http,Jsonp,Headers } from '@angular/http'; // 注意这里引入的不是Module

import { Observable} from 'rxjs';

import "rxjs/Rx";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

  title="这里是news组件，点击我" // 属性

  public transportData="这是news想要传给child的值";

  arg = "父组件(news)"

  msg: any
  msgString: string // 默认public
  headers = new Headers({'Content-Type':'application/json'});


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

  // D:\Workspaces\intelliJ-IDEA\js\nodejs_demo 是对应的后端工程

  requestData(){
    // alert("requestData");
    var url = "http://localhost:8088/get";
    this.http.get(url).subscribe(function(data){
      console.log(data);
    },function(err){
      console.log(err);
    });
  }

  requestWithRxData(){
    // 返回的数据转换成json
    // http.get()返回的是一个Observalbe对象，因此具有map方法（前提要import RxJs）
    var url = "http://localhost:8088/get";
    this.http.get(url).map(res=>res.json()).subscribe(function(data){
      console.log(data);
    },function(err){
      console.log(err);
    });
  }

  requestJsonpData(){
        // alert("requestData");
        var url = "http://localhost:8088/jsonp?callback=JSONP_CALLBACK";// jsonp必须要有这个参数，返回必须是json
        this.jsonp.get(url).subscribe(function(data){
          console.log(data);
        },function(err){
          console.log(err);
        });
  }

  requestJsonpWithRxData(){
        // alert("requestData");
        var url = "http://localhost:8088/jsonp?callback=JSONP_CALLBACK";// jsonp必须要有这个参数，返回必须是json
        this.jsonp.get(url).map(res=>res.json()).subscribe(function(data){
          console.log(data);
        },function(err){
          console.log(err);
        });
  }

  postData(){
    // Hearders 定义请求头
    var url = "http://localhost:8088/post";// jsonp必须要有这个参数，返回必须是json

    this.http.post(url,JSON.stringify({username:'vs code xuncl'}),{headers:this.headers}).subscribe(function(res){
      console.log("here post");
      console.log(res.json())
    })
  }

  fatherFn(){
    alert("这里是父组件(news)的成员方法。无参数。");
  }

  fatherFn2(arg){
    alert("这里是父组件(news)的成员方法。参数为："+arg);
  }

  runParent(e){
    console.log(e);
    alert("@output方式调用的父组件方法，参数是："+e);
  }
}
