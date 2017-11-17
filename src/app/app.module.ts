
// 首先这个根模块会告诉Angular如何组装应用

// 引入模块
import { BrowserModule } from '@angular/platform-browser'; // 浏览器解析模块
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component'; // 自定义模块
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { New2Component } from './components/new2/new2.component';

import { StorageService } from './services/storage.service'


/* nNgModule装饰器将AppModule标记为Angular模块类（也叫NgModule类）。
     NgModule, 接受一元数组�,
    �告诉Angular如何编译和启动应用。*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    New2Component
  ],
  imports: [ // 当前的项目依赖哪些模块
    BrowserModule, FormsModule
  ],
  providers: [StorageService], // 定义的Providers 服务
  bootstrap: [AppComponent] // 默认启动哪个组件
})

// 暴露的模块，默认空，但是要写
export class AppModule { }
