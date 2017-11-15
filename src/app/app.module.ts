
// 首先这个根模块会告诉Angular如何组装应用

// 引入模块
import { BrowserModule } from '@angular/platform-browser'; // 浏览器解析模块
import { NgModule } from '@angular/core'; //核心模块
import { HeaderComponent } from './components/header/header.component';


import { AppComponent } from './app.component'; // 自定义模块


/* @NgModule装饰器将AppModule标记为Angular模块类（也叫NgModule类）。
  //@NgModule, HeaderComponent 接受一元数组对象，告诉Angular如何编译和启动应用。*/

@NgModule({
  declarations: [ // 引入当前项目运行的组件，自定义组件都需要引入至此
    AppComponent,
    HeaderComponent
  ],
  imports: [ // 当前的项目依赖哪些模块
    BrowserModule
  ],
  providers: [], // 定义的Providers 服务
  bootstrap: [AppComponent] // 默认启动哪个组件
})

// 暴露的模块，默认空，但是要写
export class AppModule { }
