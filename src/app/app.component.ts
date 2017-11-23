import { Component } from '@angular/core'; // 引入Angular核心

import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-root', // 表示使用组件的名称，在html中作为标签使用
  templateUrl: './app.component.html', // 组件对应的html模板
  styleUrls: ['./app.component.css'] // 组件使用的css
})
export class AppComponent { // 数据
  title = 'app';

  hello = '你好，Angular!'

  constructor(private router:Router){}

  goShop(aid,name){
    // alert("goShop");

    // 配置跳转路由跳转传值
    let navigationExtras:NavigationExtras={
      queryParams:{"aid":aid,"name":name},
      // fragment:'anchor' // 锚点，参考官方文档
    };

    this.router.navigate(["/shoplist"],navigationExtras);
  }
}
