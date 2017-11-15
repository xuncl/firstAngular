import { Component } from '@angular/core'; // 引入Angular核心

@Component({
  selector: 'app-root', // 表示使用组件的名称，在html中作为标签使用
  templateUrl: './app.component.html', // 组件对应的html模板
  styleUrls: ['./app.component.css'] // 组件使用的css
})
export class AppComponent { // 数据
  title = 'app';

  hello = '你好，Angular!'
}
